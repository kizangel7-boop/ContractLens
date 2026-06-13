const languageSelect = document.getElementById("languageSelect");
const subtitle = document.getElementById("subtitle");
const monthlySampleBtn = document.getElementById("monthlySampleBtn");
const jeonseSampleBtn = document.getElementById("jeonseSampleBtn");
const uploadLabel = document.getElementById("uploadLabel");
const imageUpload = document.getElementById("imageUpload");
const contractText = document.getElementById("contractText");
const analyzeBtn = document.getElementById("analyzeBtn");
const scoreTitle = document.getElementById("scoreTitle");
const finalTitle = document.getElementById("finalTitle");
const scoreResult = document.getElementById("scoreResult");
const finalResult = document.getElementById("finalResult");
const riskList = document.getElementById("riskList");
const opinionTitle = document.getElementById("opinionTitle");
const aiOpinion = document.getElementById("aiOpinion");

const monthlySampleText = `
월세 계약서

임차인은 월세를 1회라도 연체할 경우 임대인은 즉시 계약을 해지할 수 있다.
임차인은 누수, 보일러 고장 등 모든 수리비를 부담한다.
임대인은 사전 통보 없이 계약을 해지할 수 있다.
보증금 반환은 임대인의 사정에 따라 지연될 수 있다.
`;

const jeonseSampleText = `
전세 계약서

본 주택에는 근저당 및 가압류가 설정되어 있을 수 있다.
임대인은 전세보증보험에 가입하지 않을 수 있다.
보증금 반환은 임대인의 자금 사정에 따라 지연될 수 있다.
임차인은 입주 당시 상태로 원상복구해야 하며 자연적인 노후화도 부담한다.
`;

const messages = {
  ko: {
    subtitle: "월세·전세 계약서 위험 조항 분석 웹앱",
    monthlySample: "월세 샘플",
    jeonseSample: "전세 샘플",
    uploadLabel: "계약서 사진 업로드",
    placeholder: "계약서 내용을 직접 입력하거나 OCR로 추출된 텍스트가 여기에 표시됩니다.",
    analyze: "분석하기",
    scoreTitle: "위험도 점수",
    finalTitle: "최종 판정",
    beforeAnalysis: "분석 전",
    point: "점",
    riskTitle: "탐지된 위험 조항",
    noRisk: "탐지된 위험 조항이 없습니다.",
    scoreLabel: "위험 점수",
    possible: "서명 가능",
    caution: "수정 후 서명",
    danger: "서명 금지",
    emptyAlert: "계약서 내용을 입력하거나 사진을 업로드해 주세요.",
    ocrLoading: "OCR로 계약서 이미지를 읽는 중입니다. 잠시만 기다려 주세요...",
    ocrDone: "OCR 텍스트 추출이 완료되었습니다.",
    ocrError: "OCR 처리 중 오류가 발생했습니다. 더 선명한 사진으로 다시 시도해 주세요.",
    opinionTitle: "AI 종합 의견",
    opinionDefault: "분석 결과가 여기에 표시됩니다.",
    opinionHigh: "본 계약서는 고위험 계약으로 분석되었습니다.",
    opinionMedium: "본 계약서는 일부 위험 요소가 있는 계약으로 분석되었습니다.",
    opinionLow: "현재까지 큰 위험 요소는 발견되지 않았습니다.",
    opinionRecommendHigh: "권장: 계약 수정 또는 전문가 상담 후 진행하세요.",
    opinionRecommendMedium: "권장: 위험 조항을 수정한 뒤 서명하세요.",
    opinionRecommendLow: "권장: 기본 확인 후 계약 진행이 가능합니다."
  },
  en: {
    subtitle: "Multilingual rental contract risk analysis web app",
    monthlySample: "Monthly Rent Sample",
    jeonseSample: "Jeonse Sample",
    uploadLabel: "Upload Contract Image",
    placeholder: "Enter contract text directly or OCR-extracted text will appear here.",
    analyze: "Analyze",
    scoreTitle: "Risk Score",
    finalTitle: "Final Decision",
    beforeAnalysis: "Not Analyzed",
    point: "pts",
    riskTitle: "Detected Risk Clauses",
    noRisk: "No risk clauses were detected.",
    scoreLabel: "Risk Score",
    possible: "Safe to Sign",
    caution: "Revise Before Signing",
    danger: "Do Not Sign",
    emptyAlert: "Please enter contract text or upload an image.",
    ocrLoading: "Reading the contract image with OCR. Please wait...",
    ocrDone: "OCR text extraction is complete.",
    ocrError: "An OCR error occurred. Please try again with a clearer image.",
    opinionTitle: "AI Overall Opinion",
    opinionDefault: "The analysis result will appear here.",
    opinionHigh: "This contract has been analyzed as a high-risk contract.",
    opinionMedium: "This contract contains some risk factors.",
    opinionLow: "No major risk factors have been found so far.",
    opinionRecommendHigh: "Recommendation: Revise the contract or consult an expert before proceeding.",
    opinionRecommendMedium: "Recommendation: Revise the risk clauses before signing.",
    opinionRecommendLow: "Recommendation: You may proceed after a basic review."
  },
  zh: {
    subtitle: "月租·全租合同风险条款分析网页应用",
    monthlySample: "月租样本",
    jeonseSample: "全租样本",
    uploadLabel: "上传合同图片",
    placeholder: "请输入合同内容，或OCR提取的文本将显示在这里。",
    analyze: "开始分析",
    scoreTitle: "风险分数",
    finalTitle: "最终判断",
    beforeAnalysis: "分析前",
    point: "分",
    riskTitle: "检测到的风险条款",
    noRisk: "未检测到风险条款。",
    scoreLabel: "风险分数",
    possible: "可以签署",
    caution: "修改后签署",
    danger: "禁止签署",
    emptyAlert: "请输入合同内容或上传图片。",
    ocrLoading: "正在使用 OCR 读取合同图片，请稍候...",
    ocrDone: "OCR 文本提取已完成。",
    ocrError: "OCR 处理时发生错误。请使用更清晰的图片重试。",
    opinionTitle: "AI 综合意见",
    opinionDefault: "分析结果将显示在这里。",
    opinionHigh: "本合同被分析为高风险合同。",
    opinionMedium: "本合同存在部分风险因素。",
    opinionLow: "目前未发现重大风险因素。",
    opinionRecommendHigh: "建议：修改合同或咨询专家后再进行。",
    opinionRecommendMedium: "建议：修改风险条款后再签署。",
    opinionRecommendLow: "建议：基本确认后可以进行签署。"
  },
  ja: {
    subtitle: "月額賃貸・チョンセ契約書リスク条項分析Webアプリ",
    monthlySample: "月額賃貸サンプル",
    jeonseSample: "チョンセサンプル",
    uploadLabel: "契約書画像アップロード",
    placeholder: "契約書の内容を直接入力するか、OCRで抽出されたテキストがここに表示されます。",
    analyze: "分析する",
    scoreTitle: "リスク点数",
    finalTitle: "最終判定",
    beforeAnalysis: "分析前",
    point: "点",
    riskTitle: "検出されたリスク条項",
    noRisk: "リスク条項は検出されませんでした。",
    scoreLabel: "リスク点数",
    possible: "署名可能",
    caution: "修正後に署名",
    danger: "署名禁止",
    emptyAlert: "契約書の内容を入力するか、画像をアップロードしてください。",
    ocrLoading: "OCRで契約書画像を読み取っています。しばらくお待ちください...",
    ocrDone: "OCRテキスト抽出が完了しました。",
    ocrError: "OCR処理中にエラーが発生しました。より鮮明な画像で再試行してください。",
    opinionTitle: "AI総合意見",
    opinionDefault: "分析結果がここに表示されます。",
    opinionHigh: "本契約書は高リスク契約として分析されました。",
    opinionMedium: "本契約書には一部リスク要素があります。",
    opinionLow: "現時点で大きなリスク要素は見つかりませんでした。",
    opinionRecommendHigh: "推奨：契約を修正するか、専門家に相談してから進めてください。",
    opinionRecommendMedium: "推奨：リスク条項を修正してから署名してください。",
    opinionRecommendLow: "推奨：基本確認後、契約を進めることができます。"
  }
};

const risks = [
  {
    title: {
      ko: "월세 연체 과도한 불이익",
      en: "Excessive Penalty for Late Rent",
      zh: "租金逾期的过度不利条款",
      ja: "家賃滞納に対する過度な不利益"
    },
    keywords: ["월세 연체", "월세를 1회라도 연체", "rent overdue", "late rent", "租金逾期", "家賃滞納"],
    score: 30,
    description: {
      ko: "월세를 한 번만 연체해도 즉시 불이익이 발생하는 조항은 과도할 수 있습니다.",
      en: "A clause that imposes immediate penalties after only one late rent payment may be excessive.",
      zh: "仅一次租金逾期就立即产生不利后果的条款可能过于苛刻。",
      ja: "家賃を一度滞納しただけで直ちに不利益が発生する条項は過度な可能性があります。"
    }
  },
  {
    title: {
      ko: "수리비 전가",
      en: "Transfer of Repair Costs",
      zh: "维修费用转嫁",
      ja: "修理費の転嫁"
    },
    keywords: ["수리비", "누수", "보일러", "repair costs", "tenant shall bear", "维修费用", "修理費"],
    score: 25,
    description: {
      ko: "모든 수리비를 임차인에게 부담시키는 조항은 위험할 수 있습니다.",
      en: "A clause requiring the tenant to bear all repair costs may be risky.",
      zh: "要求承租人承担所有维修费用的条款可能存在风险。",
      ja: "すべての修理費を借主に負担させる条項はリスクがあります。"
    }
  },
  {
    title: {
      ko: "일방적 계약 해지",
      en: "Unilateral Termination",
      zh: "单方面解除合同",
      ja: "一方的な契約解除"
    },
    keywords: ["사전 통보 없이", "즉시 해지", "7일 전 통보", "without prior notice", "terminate without notice", "无事先通知", "事前通知なし"],
    score: 30,
    description: {
      ko: "임대인이 사전 통보 없이 계약을 해지할 수 있는 조항은 위험합니다.",
      en: "A clause allowing the landlord to terminate without prior notice is risky.",
      zh: "允许出租人在无事先通知的情况下解除合同的条款存在风险。",
      ja: "貸主が事前通知なしに契約を解除できる条項はリスクがあります。"
    }
  },
  {
    title: {
      ko: "보증금 반환 위험",
      en: "Deposit Return Risk",
      zh: "押金返还风险",
      ja: "保証金返還リスク"
    },
    keywords: ["보증금 반환", "보증금 반환 지연", "보증금 전액", "deposit return", "security deposit", "押金", "保证金", "保証金"],
    score: 30,
    description: {
      ko: "보증금 반환이 지연될 수 있다는 조항은 임차인에게 불리할 수 있습니다.",
      en: "A clause allowing delayed deposit return may disadvantage the tenant.",
      zh: "允许延迟返还押金的条款可能对承租人不利。",
      ja: "保証金の返還が遅れる可能性がある条項は借主に不利です。"
    }
  },
  {
    title: {
      ko: "근저당·압류 위험",
      en: "Mortgage or Seizure Risk",
      zh: "抵押或查封风险",
      ja: "抵当権・差押リスク"
    },
    keywords: ["근저당", "압류", "가압류", "mortgage", "seizure", "抵押", "查封", "抵当権", "差押"],
    score: 35,
    description: {
      ko: "근저당이나 압류가 있는 주택은 보증금 회수 위험이 커질 수 있습니다.",
      en: "A property with mortgage or seizure issues may increase the risk of losing the deposit.",
      zh: "存在抵押或查封的房屋可能增加押金无法收回的风险。",
      ja: "抵当権や差押がある住宅は保証金回収リスクが高くなります。"
    }
  },
  {
    title: {
      ko: "전세보증보험 미가입 위험",
      en: "No Jeonse Guarantee Insurance",
      zh: "未加入保证保险风险",
      ja: "保証保険未加入リスク"
    },
    keywords: ["전세보증보험", "보증보험 미가입", "guarantee insurance", "no guarantee insurance", "保证保险", "保証保険"],
    score: 35,
    description: {
      ko: "전세보증보험에 가입하지 않는 경우 보증금 보호가 어려울 수 있습니다.",
      en: "Without guarantee insurance, protecting the deposit may be difficult.",
      zh: "未加入保证保险时，押金保护可能较困难。",
      ja: "保証保険に加入していない場合、保証金の保護が難しくなる可能性があります。"
    }
  },
  {
    title: {
      ko: "원상복구·자연 노후화 비용 전가",
      en: "Restoration and Wear-and-Tear Cost Transfer",
      zh: "原状恢复及自然损耗费用转嫁",
      ja: "原状回復・自然劣化費用の転嫁"
    },
    keywords: ["자연적인 노후화", "원상복구", "입주 당시 상태", "normal wear and tear", "original condition", "自然损耗", "原状回復"],
    score: 25,
    description: {
      ko: "자연적인 노후화까지 임차인에게 부담시키는 조항은 불리할 수 있습니다.",
      en: "A clause making the tenant pay for normal wear and tear may be unfair.",
      zh: "要求承租人承担自然损耗费用的条款可能不利。",
      ja: "自然劣化まで借主に負担させる条項は不利になる可能性があります。"
    }
  }
];

function getCurrentLanguage() {
  return languageSelect.value;
}

function preprocessImage(file) {
  return new Promise(function (resolve) {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (event) {
      img.src = event.target.result;
    };

    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const scale = 3;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        let gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
        gray = gray < 180 ? 0 : 255;

        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
      }

      ctx.putImageData(imageData, 0, 0);

      canvas.toBlob(function (blob) {
        resolve(blob);
      }, "image/png");
    };

    reader.readAsDataURL(file);
  });
}

function cleanOcrText(text) {
  return text
    .replace(/월\s*세/g, "월세")
    .replace(/계\s*약\s*서/g, "계약서")
    .replace(/!회/g, "1회")
    .replace(/1 회/g, "1회")
    .replace(/연체할\s*경무/g, "연체할 경우")
    .replace(/경무/g, "경우")
    .replace(/고잠/g, "고장")
    .replace(/계약를/g, "계약을")
    .replace(/사점메/g, "사정에")
    .replace(/사점에/g, "사정에")
    .replace(/사점/g, "사정")
    .replace(/d[iIl1|]+/g, "임대인은")
    .replace(/diel/g, "임대인은")
    .replace(/UAE/g, "임차인은")
    .replace(/LUHAS/g, "임대인은")
    .replace(/YALE/g, "임차인은")
    .replace(/HEE/g, "반환은")
    .replace(/HAE/g, "계약을")
    .replace(/RHE/g, "부담")
    .replace(/m\s*R/g, "부담")
    .replace(
      /월세를\s*1회라도\s*연체할\s*경우\s*임대인은\s*즉시\s*계약을\s*해지할\s*수\s*있다/g,
      "월세를 1회라도 연체할 경우 임대인은 즉시 계약을 해지할 수 있다."
    )
    .replace(
      /보증금\s*반환은\s*임대인의\s*사정에\s*따라\s*지연될\s*수\s*있다/g,
      "보증금 반환은 임대인의 사정에 따라 지연될 수 있다."
    );
}

function updateLanguageUI() {
  const lang = getCurrentLanguage();

  subtitle.textContent = messages[lang].subtitle;
  monthlySampleBtn.textContent = messages[lang].monthlySample;
  jeonseSampleBtn.textContent = messages[lang].jeonseSample;
  uploadLabel.textContent = messages[lang].uploadLabel;
  contractText.placeholder = messages[lang].placeholder;
  analyzeBtn.textContent = messages[lang].analyze;
  scoreTitle.textContent = messages[lang].scoreTitle;
  finalTitle.textContent = messages[lang].finalTitle;
  opinionTitle.textContent = messages[lang].opinionTitle;
  aiOpinion.textContent = messages[lang].opinionDefault;
  scoreResult.textContent = "0" + messages[lang].point;
  finalResult.textContent = messages[lang].beforeAnalysis;

  riskList.innerHTML = `
    <h2>${messages[lang].riskTitle}</h2>
    <p>${messages[lang].noRisk}</p>
  `;
}

function findRisks(text) {
  const foundRisks = [];

  risks.forEach(function (risk) {
    const isFound = risk.keywords.some(function (keyword) {
      return text.includes(keyword);
    });

    if (isFound) {
      foundRisks.push(risk);
    }
  });

  return foundRisks;
}

function calculateScore(foundRisks) {
  let totalScore = 0;

  foundRisks.forEach(function (risk) {
    totalScore += risk.score;
  });

  if (totalScore > 100) {
    totalScore = 100;
  }

  return totalScore;
}

function getFinalDecision(score, lang) {
  if (score <= 29) {
    return messages[lang].possible;
  }

  if (score <= 69) {
    return messages[lang].caution;
  }

  return messages[lang].danger;
}

function generateOpinion(foundRisks, score, lang) {
  let opinion = "";

  if (score >= 70) {
    opinion += messages[lang].opinionHigh + "\n\n";
  } else if (score >= 30) {
    opinion += messages[lang].opinionMedium + "\n\n";
  } else {
    opinion += messages[lang].opinionLow + "\n\n";
  }

  if (foundRisks.length > 0) {
    opinion += messages[lang].riskTitle + "\n";

    foundRisks.forEach(function (risk) {
      opinion += "- " + risk.title[lang] + "\n";
    });

    opinion += "\n";
  }

  if (score >= 70) {
    opinion += messages[lang].opinionRecommendHigh;
  } else if (score >= 30) {
    opinion += messages[lang].opinionRecommendMedium;
  } else {
    opinion += messages[lang].opinionRecommendLow;
  }

  return opinion;
}

function renderResult(foundRisks, totalScore, decision) {
  const lang = getCurrentLanguage();

  scoreResult.textContent = totalScore + messages[lang].point;
  finalResult.textContent = decision;
  aiOpinion.textContent = generateOpinion(foundRisks, totalScore, lang);

  if (foundRisks.length === 0) {
    riskList.innerHTML = `
      <h2>${messages[lang].riskTitle}</h2>
      <p>${messages[lang].noRisk}</p>
    `;
    return;
  }

  let riskHTML = `<h2>${messages[lang].riskTitle}</h2>`;

  foundRisks.forEach(function (risk) {
    riskHTML += `
      <div class="risk-item">
        <h3>${risk.title[lang]}</h3>
        <p>${risk.description[lang]}</p>
        <strong>${messages[lang].scoreLabel}: ${risk.score}${messages[lang].point}</strong>
      </div>
    `;
  });

  riskList.innerHTML = riskHTML;
}

monthlySampleBtn.addEventListener("click", function () {
  contractText.value = monthlySampleText;
});

jeonseSampleBtn.addEventListener("click", function () {
  contractText.value = jeonseSampleText;
});

analyzeBtn.addEventListener("click", function () {
  const lang = getCurrentLanguage();
  const text = contractText.value.trim();

  if (text === "") {
    alert(messages[lang].emptyAlert);
    return;
  }

  const foundRisks = findRisks(text);
  const totalScore = calculateScore(foundRisks);
  const decision = getFinalDecision(totalScore, lang);

  renderResult(foundRisks, totalScore, decision);
});

languageSelect.addEventListener("change", function () {
  updateLanguageUI();
});

imageUpload.addEventListener("change", function () {
  const lang = getCurrentLanguage();
  const file = imageUpload.files[0];

  if (!file) {
    return;
  }

  contractText.value = messages[lang].ocrLoading;

  preprocessImage(file)
    .then(function (processedImage) {
      return Tesseract.recognize(processedImage, "kor", {
        logger: function (message) {
          console.log(message);
        },
        tessedit_pageseg_mode: "6",
        preserve_interword_spaces: "1"
      });
    })
    .then(function (result) {
      const cleanedText = cleanOcrText(result.data.text);
      contractText.value = cleanedText;
      alert(messages[lang].ocrDone);
    })
    .catch(function (error) {
      console.error(error);
      contractText.value = "";
      alert(messages[lang].ocrError);
    });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function () {
      console.log("Service Worker Registered");
    })
    .catch(function (error) {
      console.error(error);
    });
}

updateLanguageUI();
