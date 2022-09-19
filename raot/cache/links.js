/* Github Links */
var vers = [
["raot_2.045_linux.tar.gz", "https://github.com/raotversions/raotversions/releases/download/linux2.045/raot_2.045_linux.tar.gz"],
["raot_2.043_Linux64bit.tar.gz", "https://github.com/raotversions/raotversions/releases/download/linux2.043/raot_2.043_Linux64bit.tar.gz"],
["raot-v1.906-linux64.zip", "https://https://github.com/raotversions/raotversions/releases/download/linux1.906/raot-v1.906-linux64.zip"],
["raot-v1.786-linux64.zip", "https://github.com/raotversions/raotversions/releases/download/linux1.786/raot-v1.786-linux64.zip"],
["raot-v1.753-linux64.zip", "https://github.com/raotversions/raotversions/releases/download/linux1.753/raot-v1.753-linux64.zip"],
["raot-v1.747-mac64.zip", "https://github.com/raotversions/raotversions/releases/download/mac1.747/raot-v1.747-mac64.zip"],
["raot-v1.786-mac64.zip", "https://github.com/raotversions/raotversions/releases/download/mac1.786/raot-v1.786-mac64.zip"],
["raotfg-v0.2.0.app.zip", "https://github.com/raotversions/raotversions/releases/download/mac0.2.0/raotfg-v0.2.0.app.zip"],
["raot-v1.753-win64.zip", "https://github.com/raotversions/raotversions/releases/download/win1.753/raot-v1.753-win64.zip"],
["raot-v1.786-win64.zip", "https://github.com/raotversions/raotversions/releases/download/win1.786/raot-v1.786-win64.zip"],
["raot-v1.906-win64.zip", "https://github.com/raotversions/raotversions/releases/download/win1.906/raot-v1.906-win64.zip"],
["raot-v1.953-win64.zip", "https://github.com/raotversions/raotversions/releases/download/win1.953/raot-v1.953-win64.zip"],
["raot_2.045_windows.zip", "https://github.com/raotversions/raotversions/releases/download/raot-win2.045/raot_2.045_windows.zip"],
["raotlauncher.exe", "https://github.com/raotversions/raotversions/releases/download/raot/raotlauncher.exe"],
["raotfg-v0.2.0-win64.zip", "https://github.com/raotversions/raotversions/releases/download/win0.2.0-64/raotfg-v0.2.0-win64.zip"],
["raotfg_v0.2.0_win32.zip", "https://github.com/raotversions/raotversions/releases/download/win0.2.0/raotfg_v0.2.0_win32.zip"]
];

/* Google Drive Links
var vers = [
["raot_2.045_linux.tar.gz", "https://drive.google.com/file/d/1ZT0YoTYp8x3ricG6d-wmHs4KovqbN5Kj/view?usp=sharing"],
["raot_2.043_Linux64bit.tar.gz", "https://drive.google.com/file/d/1fhVOskn1APmp0h775eg7-HDAlP4MrB4U/view?usp=sharing"],
["raot-v1.906-linux64.zip", "https://drive.google.com/file/d/1vDqRzPx-qnbTfaxM1s_88DfHDyz9JkJD/view?usp=sharing"],
["raot-v1.786-linux64.zip", "https://drive.google.com/file/d/108qwf7e_i9Pgb3H6OSGrCKMiqoMXC1y6/view?usp=sharing"],
["raot-v1.753-linux64.zip", "https://drive.google.com/file/d/1tv27ojfZDwBtfap6Em9xJDQcp7WJmgV3/view?usp=sharing"],
["raot-v1.747-mac64.zip", "https://drive.google.com/file/d/1v--5ncgFDKS1NCHSxnbVmHUo49ke37Wc/view?usp=sharing"],
["raot-v1.786-mac64.zip", "https://drive.google.com/file/d/196lSjp9MvRyxANG_GfFLoz-nZ8OtKMEs/view?usp=sharing"],
["raot-v1.753-win64.zip", "https://drive.google.com/file/d/1yPw00WB1HFveQIvm-qAmJAVlFWUqQ5O_/view?usp=sharing"],
["raot-v1.786-win64.zip", "https://drive.google.com/file/d/1Lva6Bp42mMnPMgSyybzsIyir9xDYFGmr/view?usp=sharing"],
["raot-v1.906-win64.zip", "https://drive.google.com/file/d/1ZD1KiuI_KLAdhC8RMiDyxLYRpPhs-JDx/view?usp=sharing"],
["raot-v1.953-win64.zip", "https://drive.google.com/file/d/1NLr1VkoVTXbKmoAsox70pU5_D7oBN4j5/view?usp=sharing"],
["raot_2.045_windows.zip", "https://drive.google.com/file/d/1P9lvgb2bqkL_PkZ4BM9RDKBTDWAkMO9l/view?usp=sharing"],
["raotlauncher.exe", "https://drive.google.com/file/d/1NMbfoZkGZcYSrgCzNMBW_npv3vYki6tL/view?usp=sharing"]
];
*/

const gLink = (link) => 'https://drive.google.com/uc?export=download&id=' + link.substring(link.indexOf("/d/") + 3).substring(0, link.substring(link.indexOf("/d/") + 3).indexOf("/"));
