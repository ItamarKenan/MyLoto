import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const response = await fetch('https://admin.teleline.co.il/telexmls/hagralotxml.ashx?user=myloto', {
      cache: 'no-store'
    });    

    const xmlText = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: ""
    });

    
    const jsonObj = parser.parse(xmlText);

    return NextResponse.json(jsonObj);
    
  } catch (error) {
    return NextResponse.json({ error: 'שגיאה במשיכת הנתונים' }, { status: 500 });
  }
}
