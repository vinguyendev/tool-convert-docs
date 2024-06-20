import fs from "fs/promises";
import * as fs1 from 'fs';
import path from "path";
import puppeteer from 'puppeteer'
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
function generateCompanyNameEnglish() {
    const prefixes = [
        "Global", "Tech", "Enterprise", "Innovative", "Dynamic", "Future",
        "Advanced", "Creative", "Vision", "Pioneer", "United", "Prime",
        "NextGen", "Synergy", "Strategic", "Elite", "Peak", "Summit",
        "Apex", "Vertex"
    ];
    const suffixes = [
        "Solutions", "Systems", "Corporation", "Industries", "Technologies",
        "Group", "Services", "Holdings", "Partners", "International",
        "Networks", "Resources", "Dynamics", "Consulting", "Management",
        "Logistics", "Ventures", "Developments", "Investments", "Innovations"
    ];
    const connector = [
        "and", "&"
    ];
    const prefix = getRandomElement(prefixes);
    const suffix = getRandomElement(suffixes);
    const companyType = Math.random() > 0.5 ? getRandomElement(connector) + ' ' + getRandomElement(suffixes) : suffix;
    return `${prefix} ${companyType}`;
}
function generateCompanyName() {
    const prefixes = [
        "Công ty TNHH", "Công ty Cổ phần", "Tập đoàn", "Công ty Thương mại",
        "Công ty Dịch vụ", "Công ty Sản xuất", "Công ty Phát triển"
    ];
    const middleNames = [
        "Công nghệ", "Đầu tư", "Xây dựng", "Thương mại", "Dịch vụ", "Sản xuất",
        "Phát triển", "Kỹ thuật", "Xuất nhập khẩu", "Giải pháp"
    ];
    const suffixes = [
        "Hà Nội", "Sài Gòn", "Đông Á", "An Bình", "Phú Quốc", "Hoàng Gia",
        "Đức Minh", "Thịnh Vượng", "Hòa Bình", "Toàn Cầu"
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const middle = middleNames[Math.floor(Math.random() * middleNames.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix} ${middle} ${suffix}`
}
function generateAbbreviatedCompanyName() {
    const abbreviations = [
        "ABC", "XYZ", "ACME", "GEO", "VIA", "A2Z", "IOI", "USA", "ITC", "TNT",
        "VIP", "BBQ", "FBI", "CNN", "NASA", "BMW", "IBM", "UPS", "BBC", "ESPN",
        "HP", "EA", "KFC", "JCP", "MGM", "NBA", "NFL", "NHL", "NSA", "CBS",
        "PHP", "CSS", "CEO", "CTO", "COO", "CFO", "HR", "PR", "AI", "ML",
        "AR", "VR", "IoT", "API", "AWS", "GCP", "SQL", "HTML", "CSS", "JS",
        "URL", "PDF", "GIF", "JPEG", "PNG"
    ];
    const suffixes = [
        "Corp", "Inc", "Ltd", "Group", "Solutions", "Tech", "Services",
        "Consulting", "Global", "International", "Systems", "Networks"
    ];
    const abbreviation = getRandomElement(abbreviations);
    const suffix = getRandomElement(suffixes);
    return `${abbreviation} ${suffix}`;
}

function generateRandomPhoneNumber() {
    let phoneNumber = "+84"; // Đầu số quốc gia Việt Nam (+84)

    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10); // Sinh ngẫu nhiên các số từ 0 đến 9
    }

    return phoneNumber;
}

function generateRandomFaxNumber() {
    let faxNumber = "Fax: ";

    // Sinh ngẫu nhiên độ dài của số Fax từ 7 đến 15 chữ số
    const length = Math.floor(Math.random() * 9) + 7;

    for (let i = 0; i < length; i++) {
        faxNumber += Math.floor(Math.random() * 10); // Sinh ngẫu nhiên các số từ 0 đến 9
    }

    return faxNumber;
}

function generateRandomEmail() {
    const domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com", "protonmail.com", "mail.com", "yandex.com", "zoho.com"];

    const randomLength = Math.floor(Math.random() * 10) + 5; // Độ dài ngẫu nhiên cho phần local-part (từ 5 đến 14 ký tự)
    let localPart = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < randomLength; i++) {
        localPart += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    const domain = getRandomElement(domains);

    return `${localPart}@${domain}`;
}


function generateRandomWebsite() {
    const domains = ["com", "net", "org", "edu", "gov", "io", "xyz", "tech", "online", "store", "shop", "biz", "info"];

    const subdomains = ["www", "blog", "shop", "store", "news", "mail", "forum", "community", "support", "events"];

    const randomLength = Math.floor(Math.random() * 3) + 1; // Độ dài ngẫu nhiên cho phần subdomain (từ 1 đến 3 từ)
    let subdomain = '';
    for (let i = 0; i < randomLength; i++) {
        subdomain += getRandomElement(subdomains) + '-';
    }
    subdomain = subdomain.slice(0, -1); // Xóa ký tự '-' ở cuối

    const domain = getRandomElement(domains);

    // Sinh ngẫu nhiên một path ngắn (tối đa 3 phần tử con)
    const pathLength = Math.floor(Math.random() * 4);
    let path = '';
    for (let i = 0; i < pathLength; i++) {
        const randomWord = Math.random().toString(36).substring(2, 8);
        path += '/' + randomWord;
    }

    return `https://${subdomain}.${domain}`;
}

function generateRandomCapital() {
    const capitals = [1000000000, 500000000, 200000000, 100000000, 50000000, 10000000];
    return getRandomElement(capitals);
}

function generateCapitalInWords(capital) {
    const capitalInWords = {
        1000000000: "Một tỷ đồng",
        500000000: "Năm trăm triệu đồng",
        200000000: "Hai trăm triệu đồng",
        100000000: "Một trăm triệu đồng",
        50000000: "Năm mươi triệu đồng",
        10000000: "Mười triệu đồng"
    };
    return capitalInWords[capital];
}

function generateRandomParValue() {
    const parValues = [10000, 50000, 100000, 500000, 1000000];
    return getRandomElement(parValues);
}

function generateRandomNumberOfShares() {
    return Math.floor(Math.random() * 900000) + 100000; // Số cổ phần từ 100,000 đến 999,999
}

function generateCompanyInfo() {
    const capital = generateRandomCapital();
    return {
        capital: capital,
        capitalInWords: generateCapitalInWords(capital),
        parValue: generateRandomParValue(),
        numberOfShares: generateRandomNumberOfShares()
    };
}

const firstNames = ["Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Phan", "Vũ", "Võ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý"];
const lastNames = ["Văn A", "Thị B", "Đức C", "Hồng D", "Ngọc E", "Tấn F", "Mạnh G", "Trung H", "Minh I", "Thu K", "Hoài L", "Huyền M", "Thành N", "Thúy P", "Tuấn Q", "Hải R"];
const genders = ["Nam", "Nữ", "Khác"];
const positions = ["Giám đốc", "Trưởng phòng", "Nhân viên", "Kỹ sư", "Quản lý", "Lập trình viên", "Kiểm toán viên", "Chuyên viên kinh doanh"];
const ethnicities = ["Kinh", "Hoa", "Tày", "Mường", "Khơ-me", "Nùng", "Dao", "Thái", "Gia-rai", "Ê-đê", "Ba-na", "Chăm", "Sán Chay"];
const nationalities = ["Việt Nam", "Mỹ", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Úc", "Anh", "Pháp", "Đức", "Nga"];

function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomPerson() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const gender = getRandomElement(genders);
    const position = getRandomElement(positions);
    const ethnicity = getRandomElement(ethnicities);
    const nationality = getRandomElement(nationalities);

    // Sinh ngẫu nhiên ngày sinh từ năm 1970 đến năm 2003
    const startDate = new Date('1970-01-01');
    const endDate = new Date('2003-12-31');
    const birthDate = generateRandomDate(startDate, endDate);

    return {
        fullName: fullName,
        gender: gender,
        position: position,
        birthDate: birthDate.toISOString().slice(0, 10), // Format ngày sinh yyyy-mm-dd
        ethnicity: ethnicity,
        nationality: nationality
    };
}

// Danh sách các giá trị ngẫu nhiên cho mỗi trường thông tin
const documentTypes = ["CMND", "CCCD", "Hộ chiếu", "Giấy phép lái xe", "Thẻ căn cước công dân"];
const placesOfIssue = ["Hà Nội", "TP.HCM", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Đồng Nai", "Bình Dương"];
const permanentResidence = ["Hà Nội", "TP.HCM", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Đồng Nai", "Bình Dương"];
const currentAddress = ["Số 1, Đường ABC, Quận XYZ, Thành phố HCM", "Số 10, Đường DEF, Quận GHI, Thành phố Hà Nội", "Số 5, Đường KLM, Quận NOP, Thành phố Đà Nẵng"];

// Hàm lấy ngẫu nhiên một phần tử từ mảng
// Hàm sinh ngày tháng ngẫu nhiên
// Hàm sinh thông tin giấy tờ chứng thực cá nhân
function generatePersonalDocumentInfo() {
    const documentType = getRandomElement(documentTypes);
    const documentNumber = Math.floor(Math.random() * 1000000000) + 1000000000; // Số giấy tờ chứng thực cá nhân ngẫu nhiên

    // Sinh ngẫu nhiên ngày cấp giấy tờ
    const startDate = new Date('1980-01-01');
    const endDate = new Date('2023-12-31');
    const issueDate = generateRandomDate(startDate, endDate);

    const placeOfIssue = getRandomElement(placesOfIssue);
    const permanentResidenceAddress = getRandomElement(permanentResidence);
    const currentResidenceAddress = getRandomElement(currentAddress);

    return {
        documentType: documentType,
        documentNumber: documentNumber.toString(),
        issueDate: issueDate.toISOString().slice(0, 10), // Format ngày cấp yyyy-mm-dd
        placeOfIssue: placeOfIssue,
        permanentResidence: permanentResidenceAddress,
        currentAddress: currentResidenceAddress
    };
}

// Hàm sinh thông tin doanh nghiệp
function generateBusinessInfo() {
    const enterpriseCode = Math.floor(Math.random() * 1000000000) + 1000000000; // Mã số doanh nghiệp ngẫu nhiên

    // Sinh ngẫu nhiên ngày đăng ký lần đầu từ năm 1990 đến năm 2023
    const firstRegistrationDate = generateRandomDate(new Date('1990-01-01'), new Date('2023-12-31'));

    // Sinh ngẫu nhiên số lần thay đổi đăng ký từ 1 đến 10
    const changeRegistrationCount = Math.floor(Math.random() * 10) + 1;

    // Sinh ngẫu nhiên ngày đăng ký thay đổi lần cuối từ năm 2021 đến năm hiện tại
    const lastChangeRegistrationDate = generateRandomDate(new Date('2021-01-01'), new Date());

    return {
        enterpriseCode: enterpriseCode.toString(),
        firstRegistrationDate: firstRegistrationDate.toISOString().slice(0, 10), // Format ngày đăng ký yyyy-mm-dd
        changeRegistrationCount: changeRegistrationCount,
        lastChangeRegistrationDate: lastChangeRegistrationDate.toISOString().slice(0, 10) // Format ngày đăng ký thay đổi yyyy-mm-dd
    };
}



const htmlContent = (objData) => {
    return `
<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">ol {
      margin: 0;
      padding: 0
      }
      table td, table th {
      padding: 0
      }
      .c0 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
      height: 11pt
      }
      .c2 {
      color: #000000;
      font-weight: 400;
      text-decoration: none;
      vertical-align: baseline;
      font-size: 12pt;
      font-family: "Times New Roman";
      font-style: normal
      }
      .c3 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: center
      }
      .c1 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      .c5 {
      background-color: #ffffff;
      max-width: 468pt;
      padding: 72pt 72pt 72pt 72pt
      }
      .c4 {
      font-size: 12pt;
      font-family: "Times New Roman";
      font-weight: 400
      }
      .c6 {
      height: 11pt
      }
      .title {
      padding-top: 0pt;
      color: #000000;
      font-size: 26pt;
      padding-bottom: 3pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      .subtitle {
      padding-top: 0pt;
      color: #666666;
      font-size: 15pt;
      padding-bottom: 16pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      li {
      color: #000000;
      font-size: 11pt;
      font-family: "Arial"
      }
      p {
      margin: 0;
      color: #000000;
      font-size: 11pt;
      font-family: "Arial"
      }
      h1 {
      padding-top: 20pt;
      color: #000000;
      font-size: 20pt;
      padding-bottom: 6pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      h2 {
      padding-top: 18pt;
      color: #000000;
      font-size: 16pt;
      padding-bottom: 6pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      h3 {
      padding-top: 16pt;
      color: #434343;
      font-size: 14pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      h4 {
      padding-top: 14pt;
      color: #666666;
      font-size: 12pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      h5 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
      }
      h6 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      font-style: italic;
      orphans: 2;
      widows: 2;
      text-align: left
      }
    </style>
  </head>
  <body class="c5 doc-content">
    <p class="c1"><span class="c2">S&#7902; K&#7870; HO&#7840;CH V&Agrave; &#272;&#7846;U T&#431; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C&#7896;NG H&Ograve;A X&Atilde; H&#7896;I CH&#7910; NGH&#296;A VI&#7878;T NAM</span></p>
    <p class="c1"><span class="c2">Hà Nội &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#272;&#7897;c l&#7853;p &ndash; T&#7921; do &ndash; H&#7841;nh ph&uacute;c</span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c3"><span class="c2">GI&#7844;Y CH&#7912;NG NH&#7852;N &#272;&#258;NG K&Yacute; DOANH NGHI&#7878;P</span></p>
    <p class="c3"><span class="c2">C&Ocirc;NG TY C&#7892; PH&#7846;N</span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c3"><span class="c2">M&atilde; s&#7889; doanh nghi&#7879;p: ${generateBusinessInfo().enterpriseCode}</span></p>
    <p class="c3"><span class="c2">&#272;&#259;ng k&yacute; l&#7847;n &#273;&#7847;u: ${generateBusinessInfo().firstRegistrationDate}</span></p>
    <p class="c3"><span class="c2">&#272;&#259;ng k&yacute; thay &#273;&#7893;i l&#7847;n th&#7913; ${generateBusinessInfo().firstRegistrationDate}, ng&agrave;y ${generateBusinessInfo().lastChangeRegistrationDate}</span></p>
    <p class="c3 c6"><span class="c2"></span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">1. T&ecirc;n c&ocirc;ng ty</span></p>
    <p class="c1">
      <span class="c4">T&ecirc;n c&ocirc;ng ty vi&#7871;t b&#7857;ng ti&#7871;ng Vi&#7879;t:</span>
      <span
        class="c4">
      ${generateCompanyName()}
      </span>
    </p>
    <p class="c1">
      <span
        class="c4">T&ecirc;n c&ocirc;ng ty vi&#7871;t b&#7857;ng ti&#7871;ng n&#432;&#7899;c ngo&agrave;i: </span>
      <span class="c4">
      ${generateCompanyNameEnglish()}
      </span>
    </p>
    <p class="c1"><span class="c4">T&ecirc;n c&ocirc;ng ty vi&#7871;t t&#7855;t: </span>
      <span class="c4"
        >
      ${generateAbbreviatedCompanyName()}
      </span>
    </p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">2. &#272;&#7883;a ch&#7881; tr&#7909; s&#7903; ch&iacute;nh </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">&#272;i&#7879;n tho&#7841;i: ${generateRandomPhoneNumber()} Fax: ${generateRandomFaxNumber()}</span></p>
    <p class="c1"><span class="c2">Email: ${generateRandomEmail()} Website: ${generateRandomWebsite()}</span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">3. V&#7889;n &#273;i&#7873;u l&#7879;</span></p>
    <p class="c1">
    <span class="c4">V&#7889;n &#273;i&#7873;u l&#7879;: </span>
    <span class="c4">
      ${generateCompanyInfo().capital}
      </span>
      </p>
    <p class="c1"><span class="c4">B&#7857;ng ch&#7919;: </span>
    <span class="c4"
      >
       ${generateCompanyInfo().capitalInWords}
      </span></p>
    <p class="c1"><span class="c4">M&#7879;nh gi&aacute; c&#7893; ph&#7847;n: </span>
    <span  class="c4"
      >
      ${generateCompanyInfo().parValue}
      </span>
      </p>
    <p class="c1"><span class="c4">T&#7893;ng s&#7889; c&#7893; ph&#7847;n: </span>
    <span  class="c4"
      >
       ${generateCompanyInfo().numberOfShares}
      </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1"><span class="c2">4. Ng&#432;&#7901;i &#273;&#7841;i di&#7879;n theo ph&aacute;p lu&#7853;t c&#7911;a c&ocirc;ng ty</span></p>
    <p class="c1"><span class="c4">H&#7885; v&agrave; t&ecirc;n: </span>
    <span  class="c4"
      >
      ${generateRandomPerson().fullName}
</span>
      <span class="c2">&nbsp; &nbsp;Gi&#7899;i t&iacute;nh: ${generateRandomPerson().gender}</span></p>
    <p class="c1"><span class="c4">Ch&#7913;c danh:</span>
    <span   class="c4"
      >
      ${generateRandomPerson().position}
      </span>
      <span
      class="c2">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
    <p class="c1"><span class="c2">Sinh ng&agrave;y: ${generateRandomPerson().birthDate} D&acirc;n t&#7897;c: ${generateRandomPerson().ethnicity} Qu&#7889;c t&#7883;ch: Việt Nam </span></p>
    <p class="c0"><span class="c2"></span></p>
    <p class="c1">
    <span class="c4">Lo&#7841;i gi&#7845;y t&#7901; ch&#7913;ng th&#7921;c c&aacute; nh&acirc;n: </span>
    <span   class="c4"
      >
      ${generatePersonalDocumentInfo().documentType}
      </span>
  </p>
    <p class="c1">
    <span class="c4">S&#7889; gi&#7845;y ch&#7913;ng th&#7921;c c&aacute; nh&acirc;n:</span>
    <span   class="c4"
      >
      ${generatePersonalDocumentInfo().documentNumber}
      </span>
      </p>
    <p class="c1">
    <span class="c2">Ng&agrave;y c&#7845;p: ${generatePersonalDocumentInfo().issueDate}. &nbsp;N&#417;i c&#7845;p:  ${generatePersonalDocumentInfo().placeOfIssue}.</span></p>
    <p class="c1"><span
      class="c4">N&#417;i &#273;&#259;ng k&yacute; h&#7897; kh&#7849;u th&#432;&#7901;ng tr&uacute;: </span>
       <span   class="c4"
      >
      ${generatePersonalDocumentInfo().permanentResidence}
      </span>
  </p>
    <p class="c1">
    <span class="c4">Ch&#7895; &#7903; hi&#7879;n t&#7841;i: </span>
    <span   class="c4"
      >
      ${generatePersonalDocumentInfo().currentAddress}
      </span>
      </p>
    <p class="c0"><span class="c2"></span></p>
  </body>
</html>
`
};
const exportData = async (objData) => {
// Save the HTML content to a file
    const htmlFilePath = `TEST.html`
    await fs.writeFile(htmlFilePath, htmlContent(objData), async (err) => {
        console.log('HTML file has been saved!');
    });
    const outputFilePath = `template1/T${objData}.pdf`
// Read the HTML file
    const html = fs1.readFileSync(htmlFilePath, 'utf8');
// Launch a headless browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
// Set the content of the page to the HTML content
    await page.setContent(html, {waitUntil: 'domcontentloaded'});
// Generate the PDF
    await page.pdf({
        path: outputFilePath,
        format: 'A4',
        printBackground: true,
    });
// Close the browser
    await browser.close();
    console.log(`PDF file has been saved! ${objData}`);
}
for (const i of Array.from(Array(500).keys(), key => key + 1)) {
    await exportData(i)
}
