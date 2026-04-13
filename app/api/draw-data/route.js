import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
  try {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: ""
    });

    const drawsRes = await fetch('https://admin.teleline.co.il/telexmls/hagralotxml.ashx?user=myloto', { cache: 'no-store' });
    const drawsXml = await drawsRes.text();
    const drawsJson = parser.parse(drawsXml);

    const statsRes = await fetch('https://admin.teleline.co.il/telexmls/hagralotstatsxml.ashx?branch=2&amount=10', { cache: 'no-store' });
    const statsXml = await statsRes.text();
    const statsJson = parser.parse(statsXml);

    return NextResponse.json({
      draws: drawsJson,
      stats: statsJson
    });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'שגיאה במשיכת הנתונים' }, { status: 500 });
  }
}
