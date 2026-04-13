import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const response = await fetch('https://admin.teleline.co.il/telexmls/hagralotxml.ashx?user=myloto', {
      cache: 'no-store'
    });    

    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false, // קריטי! אומר לו לא להתעלם מהנתונים כמו c1="J"
      attributeNamePrefix: ""  // מנקה קידומות מיותרות כדי שהשמות יהיו נקיים (c1 ולא @_c1)
    });

    // מתרגמים בפועל!
    const jsonObj = parser.parse(xmlText);

    // 3. שולחים את התשובה כ-JSON נקי חזרה למי שביקש (לפרונטאנד שלנו)
    return NextResponse.json(jsonObj);
    
  } catch (error) {
    // אם משהו משתבש (למשל אין אינטרנט), נחזיר שגיאה מסודרת
    return NextResponse.json({ error: 'שגיאה במשיכת הנתונים' }, { status: 500 });
  }
}