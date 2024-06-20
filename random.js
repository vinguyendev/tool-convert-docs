export function generateCompanyName() {
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
