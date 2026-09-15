const agentData = {
  jett: {
    role: '타격대', roleClass: 'duelist', title: '제트 (Jett)',
    body: '<b>운영 핵심:</b> 빠른 기동력과 순풍(E)으로 진입 후 상대를 교란합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 헤이븐, 바인드'
  },
  raze: {
    role: '타격대', roleClass: 'duelist', title: '레이즈 (Raze)',
    body: '<b>운영 핵심:</b> 폭발 팩(Q)으로 고지대를 점령하고 적진을 강하게 흔듭니다.<br><br>• <strong>추천 맵:</strong> 바인드, 스플릿, 로터스'
  },
  phoenix: {
    role: '타격대', roleClass: 'duelist', title: '피닉스 (Phoenix)',
    body: '<b>운영 핵심:</b> 화염 스킬로 스스로 치유하며 공격적인 진입을 펼칩니다.<br><br>• <strong>추천 맵:</strong> 어센트, 브리즈'
  },
  reyna: {
    role: '타격대', roleClass: 'duelist', title: '레이나 (Reyna)',
    body: '<b>운영 핵심:</b> 적 처치 시 생명력 회복/무적 상태로 연속 스킬을 이어갑니다.<br><br>• <strong>추천 맵:</strong> 모든 맵'
  },
  yoru: {
    role: '타격대', roleClass: 'duelist', title: '요루 (Yoru)',
    body: '<b>운영 핵심:</b> 텔레포트와 분신으로 적에게 지속적인 심리전을 거는 요원입니다.<br><br>• <strong>추천 맵:</strong> 바인드, 브리즈'
  },
  neon: {
    role: '타격대', roleClass: 'duelist', title: '네온 (Neon)',
    body: '<b>운영 핵심:</b> 고속 질주와 슬라이딩으로 빠른 사이트 진입을 주도합니다.<br><br>• <strong>추천 맵:</strong> 프랙처, 선셋'
  },
  iso: {
    role: '타격대', roleClass: 'duelist', title: '아이소 (Iso)',
    body: '<b>운영 핵심:</b> 에너지 보호막을 켜고 정면 싸움에서 우위를 점합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 펄'
  },
  waylay: {
    role: '타격대', roleClass: 'duelist', title: '웨이레이 (Waylay)',
    body: '<b>운영 핵심:</b> 빛의 파편을 이용해 적을 공격하고 빠른 속도로 복귀하여 교전을 이끕니다.<br><br>• <strong>추천 맵:</strong> 선셋, 어센트'
  },
  sova: {
    role: '이니시에이터', roleClass: 'initiator', title: '소바 (Sova)',
    body: '<b>운영 핵심:</b> 정찰 화살과 드론으로 안전하게 위치 정보를 수집합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 헤이븐, 아이스박스'
  },
  fade: {
    role: '이니시에이터', roleClass: 'initiator', title: '페이드 (Fade)',
    body: '<b>운영 핵심:</b> 공포의 자국을 통해 적의 추적과 청각 마비를 동시에 수행합니다.<br><br>• <strong>추천 맵:</strong> 로터스, 어센트'
  },
  breach: {
    role: '이니시에이터', roleClass: 'initiator', title: '브리치 (Breach)',
    body: '<b>운영 핵심:</b> 벽을 통과하는 뇌진탕과 충격파로 거점을 효과적으로 붕괴시킵니다.<br><br>• <strong>추천 맵:</strong> 프랙처, 스플릿'
  },
  skye: {
    role: '이니시에이터', roleClass: 'initiator', title: '스카이 (Skye)',
    body: '<b>운영 핵심:</b> 매 섬광으로 정찰하고 아군을 치유하며 서포트합니다.<br><br>• <strong>추천 맵:</strong> 바인드, 스플릿'
  },
  kayo: {
    role: '이니시에이터', roleClass: 'initiator', title: '케이/오 (KAY/O)',
    body: '<b>운영 핵심:</b> 제압 단검으로 적의 스킬을 막아 순수 총싸움 판을 만듭니다.<br><br>• <strong>추천 맵:</strong> 어센트, 아이스박스'
  },
  gekko: {
    role: '이니시에이터', roleClass: 'initiator', title: '게코 (Gekko)',
    body: '<b>운영 핵심:</b> 지원이(요동이)를 활용해 원거리 스파이크 설치 및 회수가 가능합니다.<br><br>• <strong>추천 맵:</strong> 로터스, 선셋'
  },
  tejo: {
    role: '이니시에이터', roleClass: 'initiator', title: '테호 (Tejo)',
    body: '<b>운영 핵심:</b> 전술 미사일과 정밀 타격 드론으로 숨은 적을 강제로 밀어냅니다.<br><br>• <strong>추천 맵:</strong> 바인드, 로터스'
  },
  omen: {
    role: '전략가', roleClass: 'controller', title: '오멘 (Omen)',
    body: '<b>운영 핵심:</b> 투과 연막과 텔레포트로 변칙적인 위치를 선점합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 스플릿'
  },
  brimstone: {
    role: '전략가', roleClass: 'controller', title: '브림스톤 (Brimstone)',
    body: '<b>운영 핵심:</b> 3개의 연막을 동시에 투하하여 빠른 사이트 점령을 돕습니다.<br><br>• <strong>추천 맵:</strong> 바인드, 프랙처'
  },
  viper: {
    role: '전략가', roleClass: 'controller', title: '바이퍼 (Viper)',
    body: '<b>운영 핵심:</b> 독성 장막을 통해 넓은 구역의 시야를 지속해서 차단합니다.<br><br>• <strong>추천 맵:</strong> 아이스박스, 브리즈'
  },
  astra: {
    role: '전략가', roleClass: 'controller', title: '아스트라 (Astra)',
    body: '<b>운영 핵심:</b> 맵 전체에 별을 깔아 원거리 지능형 지원을 펼칩니다.<br><br>• <strong>추천 맵:</strong> 펄, 스플릿'
  },
  harbor: {
    role: '전략가', roleClass: 'controller', title: '하버 (Harbor)',
    body: '<b>운영 핵심:</b> 물의 방벽으로 아군의 진격로를 안전하게 보호합니다.<br><br>• <strong>추천 맵:</strong> 펄, 로터스'
  },
  clove: {
    role: '전략가', roleClass: 'controller', title: '클로브 (Clove)',
    body: '<b>운영 핵심:</b> 사망 후에도 미니맵 연막을 칠 수 있고 부활 궁극기를 가집니다.<br><br>• <strong>추천 맵:</strong> 어센트, 선셋'
  },
  miks: {
    role: '전략가', roleClass: 'controller', title: '믹스 (Miks)',
    body: '<b>운영 핵심:</b> 다채로운 유틸리티 스킬을 활용하여 진입로 시야 차단과 진영 흔들기를 수행합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 바인드'
  },
  killjoy: {
    role: '감시자', roleClass: 'sentinel', title: '킬조이 (Killjoy)',
    body: '<b>운영 핵심:</b> 포탑과 알람봇으로 완벽한 거점 방어망을 구축합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 아이스박스'
  },
  cypher: {
    role: '감시자', roleClass: 'sentinel', title: '사이퍼 (Cypher)',
    body: '<b>운영 핵심:</b> 스파이캠과 함정으로 럴킹 차단 및 시야 정보를 지속 제공합니다.<br><br>• <strong>추천 맵:</strong> 바인드, 선셋'
  },
  sage: {
    role: '감시자', roleClass: 'sentinel', title: '세이지 (Sage)',
    body: '<b>운영 핵심:</b> 장벽 설치로 진입을 막고 치유 및 부활로 아군을 지원합니다.<br><br>• <strong>추천 맵:</strong> 스플릿, 아이스박스'
  },
  chamber: {
    role: '감시자', roleClass: 'sentinel', title: '체임버 (Chamber)',
    body: '<b>운영 핵심:</b> 앵커 순간이동으로 저격 후 안전하게 탈출하는 거점 사수형 요원입니다.<br><br>• <strong>추천 맵:</strong> 로터스, 바인드'
  },
  deadlock: {
    role: '감시자', roleClass: 'sentinel', title: '데드록 (Deadlock)',
    body: '<b>운영 핵심:</b> 음향 센서와 장벽 메쉬로 적의 러시를 한꺼번에 저지합니다.<br><br>• <strong>추천 맵:</strong> 바인드, 어센트'
  },
  vyse: {
    role: '감시자', roleClass: 'sentinel', title: '바이스 (Vyse)',
    body: '<b>운영 핵심:</b> 액상 금속으로 진입로를 막고 적의 주 무기 사용을 봉쇄합니다.<br><br>• <strong>추천 맵:</strong> 선셋, 바인드'
  },
  veto: {
    role: '감시자', roleClass: 'sentinel', title: '비토 (Veto)',
    body: '<b>운영 핵심:</b> 상대 스킬을 무력화하고 타격을 주어 순수 총기 교전을 강제합니다.<br><br>• <strong>추천 맵:</strong> 어센트, 헤이븐'
  }
};

function openAgentModal(agentKey) {
  const agent = agentData[agentKey];
  if (!agent) return;

  const modal = document.getElementById('agentModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  modalHeader.className = `agent-role ${agent.roleClass}`;
  modalHeader.textContent = agent.role;
  modalTitle.textContent = agent.title;
  modalBody.innerHTML = agent.body;

  modal.style.display = 'block';
}

function closeAgentModal() {
  const modal = document.getElementById('agentModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('agentModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
// ==========================================
// 게임 팁 & 가이드 모달 데이터
// ==========================================
const tipData = {
  tip1: {
    tag: '사격 팁',
    title: '1. 초탄 조준선 위치 (헤드라인 유지)',
    body: `<b>운영 핵심:</b> 모든 사격의 기본은 헤드라인(머리 높이)을 유지하는 것입니다.<br><br>
    • <b>구조물 활용:</b> 맵 곳곳의 상자 2단 높이, 벽면의 띠 모양 선을 기준으로 조준선을 상시 고정하세요.<br>
    • <b>크로스헤어 placement:</b> 벽을 타고 도망가거나 진입할 때 이미 적이 나올 위치에 조준선을 가져다 놓는 연습이 필수입니다.`
  },
  tip2: {
    tag: '이동/조작',
    title: '2. 브레이킹 (Moving & Shooting)',
    body: `<b>운영 핵심:</b> 발로란트는 이동 중 사격 시 탄번짐이 매우 심합니다.<br><br>
    • <b>반대 키 입력:</b> 이동하던 방향의 반대키를 순간적으로 눌러(A로 이동 중 D 입력) 완전 정지 상태를 만든 뒤 사격하세요.<br>
    • <b>만세 브레이킹:</b> 이동 키에서 손을 떼는 것보다 반대 키를 톡 쳐주는 것이 훨씬 빠르게 명중률을 회복합니다.`
  },
  tip3: {
    tag: '경제 관리',
    title: '3. 바이 라운드 & 자금 관리 (Economy)',
    body: `<b>운영 핵심:</b> 팀원 전체의 자금을 맞추는 것이 승리의 지름길입니다.<br><br>
    • <b>풀바이(Full Buy):</b> 최소 3,900크레드 이상(밴달/팬텀 + 중갑옷 + 스킬)을 맞출 수 있을 때 구매합니다.<br>
    • <b>이코(Eco) / 세이브:</b> 다음 라운드에 풀바이를 맞추기 위해 자금을 아끼는 라운드입니다. 팀원들과 구매 스타일을 통일하세요.`
  },
  tip4: {
    tag: '전술/소통',
    title: '4. 스파이크 설치 & 해체 타이밍',
    body: `<b>운영 핵심:</b> 스파이크는 설치/해체 소리 자체가 거대한 심리전 요소입니다.<br><br>
    • <b>사운드 플레이:</b> 해체 소리만 내고 적이 삐끔 나오는 것을 노리는 '반해체(페이크)'를 적극 활용하세요.<br>
    • <b>설치 위치:</b> 아군이 안전하게 사격 지원을 해줄 수 있는 오픈 사이트 위치에 설치하는 것이 유리합니다.`
  }
};

// 팁 모달 열기 함수
function openTipModal(tipKey) {
  const tip = tipData[tipKey];
  if (!tip) return;

  const modal = document.getElementById('agentModal') || document.getElementById('tipModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (modalHeader) {
    modalHeader.className = 'badge';
    modalHeader.textContent = tip.tag;
  }
  if (modalTitle) modalTitle.textContent = tip.title;
  if (modalBody) modalBody.innerHTML = tip.body;

  if (modal) {
    modal.style.display = 'flex'; // 화면 중앙 정렬을 위해 flex 지정
  }
}
// ==========================================
// 기존 tips.html 카드 텍스트를 그대로 읽어오는 모달 함수
// ==========================================
function openTipModal(element) {
  // 클릭된 카드 요소 또는 데이터 찾기
  let card = element;
  if (typeof element === 'string') {
    // 만약 기존처럼 openTipModal('tip1') 형태로 호출된 경우 대응
    const cards = document.querySelectorAll('.tip-card');
    card = Array.from(cards).find(c => c.getAttribute('onclick')?.includes(element)) || cards[0];
  }

  if (!card) return;

  // 카드 겉면에 적힌 텍스트 읽기
  const tagText = card.querySelector('.tip-tag')?.textContent || '게임 팁';
  const titleText = card.querySelector('h3')?.textContent || '팁 상세 정보';
  const descText = card.querySelector('p')?.textContent || '';

  // 모달 요소 가져오기
  const modal = document.getElementById('agentModal') || document.getElementById('tipModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  // 모달 내용에 카드 텍스트 그대로 주입
  if (modalHeader) {
    modalHeader.className = 'badge';
    modalHeader.textContent = tagText;
  }
  if (modalTitle) modalTitle.textContent = titleText;
  if (modalBody) {
    modalBody.innerHTML = `<b>상세 가이드:</b><br>${descText}`;
  }

  // 모달 창 열기
  if (modal) {
    modal.style.display = 'flex';
  }
}
// ==========================================
// 팁 카드 제목 기반 상세 내용 데이터 & 모달 연결
// ==========================================
const tipDetailDatabase = {
  '헤드라인': `<b>자세한 가이드:</b><br>
  • <b>구조물 가이드:</b> 맵에 배치된 상자 2단 높이, 벽면의 줄무늬 라인이 모두 헤드라인 높이와 일치합니다.<br>
  • <b>에임 두는 위치:</b> 코너를 돌 때 벽 바로 옆이 아닌, 적이 튀어나올 범위를 계산하여 약간 넓게 조준선을 배치하세요.<br>
  • <b>연습 팁:</b> 사격장에서 로봇의 머리 위치에 조준선을 고정한 채 좌우로 이동하며 에임을 유지하는 방사형 연습을 추천합니다.`,
  
  '브레이킹': `<b>자세한 가이드:</b><br>
  • <b>메커니즘:</b> 이동 키를 떼는 것보다 진행 반대 방향 키를 톡 쳐주면 순간적으로 이동 속도가 0이 되어 명중률이 100%로 회복됩니다.<br>
  • <b>카운터 스트레이핑:</b> A키로 왼쪽 이동 중 D키를 짧게 눌러 사격 후 다시 A키로 숨는 '와이핑' 테크닉이 핵심입니다.<br>
  • <b>주의사항:</b> 크로스헤어가 벌어지는 동안 사격하면 탄이 완전히 튀므로, 소리와 십자가 모양을 확인하고 사격하세요.`,
  
  '자금': `<b>자세한 가이드:</b><br>
  • <b>풀바이 라운드:</b> 팀원 전체 자금이 3,900~4,500크레드 이상일 때 밴달/팬텀과 중갑옷, 핵심 스킬을 구매합니다.<br>
  • <b>이코(세이브) 라운드:</b> 다음 라운드 풀바이를 위해 1,500~2,000크레드 이상을 남기고 크래식/저스티스만 구매합니다.<br>
  • <b>바이 버튼 활용:</b> 팀원에게 '구매 요청'을 하거나 여유 자금이 있을 땐 팀원의 무기를 사주어 팀 전체의 전력을 일치시키세요.`,
  
  '스파이크': `<b>자세한 가이드:</b><br>
  • <b>반해체(페이크):</b> 4초 이상 눌러 50% 진행선(체크포인트)을 만드는 것이 중요합니다. 소리만 내고 1초 뒤 사격 준비를 하세요.<br>
  • <b>설치 위치:</b> 사방이 막힌 곳보다는 팀원이 롱 거리에 위치해 사격 지원을 해줄 수 있는 '오픈 설치' 구역을 활용하세요.<br>
  • <b>시간 계산:</b> 스파이크는 총 45초 후 폭발하며, 해체에는 총 7초(반해체 3.5초)가 소요됩니다.`
};

function openTipModal(element) {
  let card = element;

  // 카드 요소 찾기
  if (typeof element === 'string') {
    const cards = document.querySelectorAll('.tip-card');
    card = Array.from(cards).find(c => c.getAttribute('onclick')?.includes(element)) || cards[0];
  } else if (!element || !element.classList?.contains('tip-card')) {
    card = event?.currentTarget || document.querySelector('.tip-card');
  }

  if (!card) return;

  // 카드 정보 읽기
  const tagText = card.querySelector('.tip-tag')?.textContent || '게임 팁';
  const titleText = card.querySelector('h3')?.textContent || '팁 상세 정보';
  const descText = card.querySelector('p')?.textContent || '';

  // 제목 키워드에 맞는 긴 상세 내용 찾기
  let detailedBody = `<b>상세 가이드:</b><br>${descText}<br><br>• 추가적인 실전 팁을 활용해 전술적 우위를 점해보세요.`;
  
  for (const key in tipDetailDatabase) {
    if (titleText.includes(key)) {
      detailedBody = tipDetailDatabase[key];
      break;
    }
  }

  // 모달 요소에 내용 연결
  const modal = document.getElementById('agentModal') || document.getElementById('tipModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (modalHeader) {
    modalHeader.className = 'badge';
    modalHeader.textContent = tagText;
  }
  if (modalTitle) modalTitle.textContent = titleText;
  if (modalBody) modalBody.innerHTML = detailedBody;

  if (modal) {
    modal.style.display = 'flex';
  }
}
// ==========================================
// 요원 & 맵 공략 상세 데이터 및 모달 함수
// ==========================================
// ==========================================
// 전체 요원 & 맵 상세 공략 데이터 베이스
// ==========================================
const agentMapDetailDatabase = {
  // --- 타격대 ---
  '제트': `<b>타격대 상세 공략:</b><br>
  • <b>순풍(E):</b> 연막(C)을 설치한 뒤 연막 내부로 진입하여 진영을 뒤흔드는 진입 플레이가 핵심입니다.<br>
  • <b>칼날 폭풍(X):</b> 이동 시 정확도가 100%이므로 공중 점프 사격 및 이코 라운드 무기 대용으로 최적입니다.`,
  
  '레이나': `<b>타격대 상세 공략:</b><br>
  • <b>눈총(C):</b> 벽 너머나 공중에 던져 적의 시야를 차단한 직후 교전을 시작하세요.<br>
  • <b>포식/무시(Q/E):</b> 첫 킬을 낸 후 무적으로 안전하게 빠지거나 체력을 회복하여 연쇄 킬을 노리세요.`,

  '레이즈': `<b>타격대 상세 공략:</b><br>
  • <b>폭발 팩(Q):</b> 로켓 점프(새첼 팩)를 활용해 예상을 깨는 빠른 진입각을 만드세요.<br>
  • <b>페인트 탄(E) & 페인트 쉘:</b> 좁은 길목이나 좁은 구석에 숨은 적을 강제로 밀어내는 데 탁월합니다.`,

  '피닉스': `<b>타격대 상세 공략:</b><br>
  • <b>커브볼(Q):</b> 벽 뒤나 모퉁이에서 꺾어 던지는 섬광으로 안전하게 각을 지우세요.<br>
  • <b>역습(X):</b> 궁극기 사용 중 사망해도 원래 위치로 부활하므로 사이트 진입 시 선봉에 서세요.`,

  '네온': `<b>타격대 상세 공략:</b><br>
  • <b>고속 기어(E):</b> 슬라이딩을 활용해 적의 헤드라인 에임을 흔들며 진입하세요.<br>
  • <b>추월차선(C):</b> 양옆을 가리는 이중 연막벽으로 안전하게 진입로를 확보할 수 있습니다.`,

  '아이소': `<b>타격대 상세 공략:</b><br>
  • <b>구슬 보호막(Double Tap):</b> 적 처치 후 생기는 구슬을 쏴 1회 피해를 완벽히 막는 보호막을 생성하세요.<br>
  • <b>결투(X):</b> 적 1명을 1대1 림보 공간으로 끌고 들어가 강제 일기토를 신청합니다.`,

  // --- 척후대 ---
  '소바': `<b>척후대 상세 공략:</b><br>
  • <b>정찰 화살(E):</b> 각화살을 미리 익혀 라운드 극초반 적의 인원 배치를 파악하세요.<br>
  • <b>사냥꾼의 분노(X):</b> 월샷이나 정찰로 찍힌 적, 스파이크 해체 사운드에 맞춰 사용하세요.`,

  '페이드': `<b>척후대 상세 공략:</b><br>
  • <b>귀신(E) & 추적귀(C):</b> 귀신으로 위치를 노출시킨 뒤 추적귀를 보내 적의 시야와 소리를 차단하세요.<br>
  • <b>황혼(X):</b> 넓은 범위를 덮어 적의 소리를 차단하고 궤적을 남겨 사이트 탈환에 최고입니다.`,

  '브리치': `<b>척후대 상세 공략:</b><br>
  • <b>결진(E) & 여진(C):</b> 벽 너머의 적을 기절시키거나 구석에 숨은 적을 타격하세요.<br>
  • <b>지진 벼락(X):</b> 사이트 전체를 기절시키는 궁극기로 팀원의 진입을 완벽히 지원합니다.`,

  '케이/오': `<b>척후대 상세 공략:</b><br>
  • <b>제로/포인트(E):</b> 칼을 던져 범위 내 적들의 스킬 사용을 차단(억제)하세요.<br>
  • <b>NULL-cmd(X):</b> 자신 중심의 억제 파동을 일으키며 사망 시 팀원이 부활시켜줄 수 있습니다.`,

  '게코': `<b>척후대 상세 공략:</b><br>
  • <b>지원이(Wingman):</b> 지원이를 보내 스파이크를 대신 설치하거나 해체하게 만들 수 있습니다.<br>
  • <b>스킬 회수:</b> 사용 후 바닥에 떨어진 크리처들을 구슬 형태로 다시 회수해 재사용하세요.`,

  // --- 전략가 ---
  '바이퍼': `<b>전략가 상세 공략:</b><br>
  • <b>독성 장막(E):</b> 주요 진입로 시야를 긴 장막으로 한 번에 가려줍니다.<br>
  • <b>뱀이빨(C):</b> 스파이크 설치 후 각독으로 해체를 지연시키는 플레이가 매우 강력합니다.`,

  '오멘': `<b>전략가 상세 공략:</b><br>
  • <b>어둠의 장막(E):</b> 높낮이와 상관없이 원하는 정교한 위치에 원거리 연막을 칩니다.<br>
  • <b>그림자 걸음(C):</b> 순간이동으로 예측하기 힘든 상자 위나 적의 뒤각을 노리세요.`,

  '브림스톤': `<b>전략가 상세 공략:</b><br>
  • <b>공중 연막(E):</b> 패드를 통해 한 번에 3개의 연막을 동시에 즉시 떨어뜨릴 수 있습니다.<br>
  • <b>자극제 탄범(C) & 궤도 폭격(X):</b> 팀 전체의 진입 속도를 올리거나 적 구역을 초토화하세요.`,

  '아스트라': `<b>전략가 상세 공략:</b><br>
  • <b>천상 형상:</b> 별을 미리 설치한 뒤 연막, 중력샘(끌어당김), 진동샘(기절)으로 자유롭게 전환합니다.<br>
  • <b>우주 분열(X):</b> 총알과 소리를 모두 차단하는 거대한 음향 차단 벽을 세웁니다.`,

  '하버': `<b>전략가 상세 공략:</b><br>
  • <b>해일(E) & 만조:</b> 물길을 조종해 유연한 유선형 연막벽을 생성합니다.<br>
  • <b>구체(Q):</b> 총알을 막아주는 보호막 연막을 형성해 안전한 설치를 돕습니다.`,

  // --- 감시자 ---
  '킬조이': `<b>감시자 상세 공략:</b><br>
  • <b>포탑(E) & 알람봇(Q):</b> 적의 뒤치기(플랭킹)를 감지하고 사이트 진입을 억제합니다.<br>
  • <b>봉쇄(X):</b> 거대 범위를 격리하여 리테이크(사이트 재점령)나 진입 시 무혈입성을 만듭니다.`,

  '사이퍼': `<b>감시자 상세 공략:</b><br>
  • <b>스파이캠(E) & 트랩와이어(C):</b> 치명적인 걸림 트랩과 카메라로 한쪽 사이트를 혼자 완벽 방어합니다.<br>
  • <b>신경 절도(X):</b> 시체에 사용하여 살아있는 모든 적의 위치를 실시간으로 밝혀냅니다.`,

  '체임버': `<b>감시자 상세 공략:</b><br>
  • <b>랑데부(E):</b> 앵커를 설치하여 교전 직후 순간이동으로 안전하게 탈출합니다.<br>
  • <b>헤드헌터(Q) & 역전의 명수(X):</b> 강력한 저격총과 권총 스킬로 저자본 라운드에서 변수를 만듭니다.`,

  '데드록': `<b>감시자 상세 공략:</b><br>
  • <b>중력물림(C) & 음향 센서(Q):</b> 적의 소리나 앉아서 오지 않는 움직임을 감지해 강제 앉기를 유도합니다.<br>
  • <b>소멸의 고치(X):</b> 적 1명을 고치로 만들어 끌고 가며 구출하지 못하면 즉사시킵니다.`,

  // --- 맵 공략 ---
  '바인드': `<b>맵 전술 상세:</b><br>
  • <b>순간이동기(텔포) 활용:</b> A-B 간 빠르게 이동 가능한 텔레포트로 적의 심리를 교란하세요.<br>
  • <b>주요 요원:</b> 바이퍼, 레이즈, 브림스톤`,

  '어센트': `<b>맵 전술 상세:</b><br>
  • <b>미드 주도권:</b> 미드(중앙) 지역을 통제하는 팀이 경기 전체 승기를 잡습니다.<br>
  • <b>문 스위치:</b> A/B 사이트 문을 닫거나 부셔서 진입로를 제한하세요.`,

  '헤이븐': `<b>맵 전술 상세:</b><br>
  • <b>3개 사이트(A, B, C):</b> 사이트가 3개이므로 백업 속도와 빠른 사운드 정보 공유가 필수입니다.<br>
  • <b>주요 요원:</b> 소바, 브림스톤, 킬조이`,

  '스플릿': `<b>맵 전술 상세:</b><br>
  • <b>고지대(메자닌) 점령:</b> 밧줄과 2층 지역을 먼저 확보하는 쪽이 매우 유리합니다.<br>
  • <b>주요 요원:</b> 레이즈, 사이퍼, 오멘`,

  '아이스박스': `<b>맵 전술 상세:</b><br>
  • <b>수직 지형 활용:</b> 2단 컨테이너와 줄타기 구조물이 많아 공중 교전 및 헤드라인 고정이 중요합니다.<br>
  • <b>주요 요원:</b> 바이퍼, 세이지, 제트`,

  '브리즈': `<b>맵 전술 상세:</b><br>
  • <b>장거리 교전:</b> 교전 거리가 매우 길어 밴달 및 오퍼레이터의 활용도가 극대화되는 맵입니다.<br>
  • <b>주요 요원:</b> 바이퍼, 소바, 제트`,

  '프랙처': `<b>맵 전술 상세:</b><br>
  • <b>양방향 진입:</b> 수비팀 진영을 양쪽 밧줄로 에워싸서 공격하는 특수 구조입니다.<br>
  • <b>주요 요원:</b> 브리치, 네온, 킬조이`,

  '펄스': `<b>맵 전술 상세:</b><br>
  • <b>수중 도시 & 꺾인 각:</b> B롱 구역이 길고 복잡하며 스파이크 오픈 설치 각도가 정형화되어 있습니다.<br>
  • <b>주요 요원:</b> 바이퍼, 페이드, 킬조이`,

  '로터스': `<b>맵 전술 상세:</b><br>
  • <b>회전문 & 파괴 가능한 벽:</b> C사이트 회전문 소리와 A-B 연결 벽을 파괴하는 타이밍이 핵심입니다.<br>
  • <b>주요 요원:</b> 오멘, 브리치, 게코`,

  '선셋': `<b>맵 전술 상세:</b><br>
  • <b>미드 주도권 싸움:</b> 미드 교전이 치열하며 B사이트 진입 시 좁은 길목 제어가 중요합니다.<br>
  • <b>주요 요원:</b> 사이퍼, 소바, 오멘`
};

// 요원/맵 전용 모달 열기 함수 (기존 openAgentModal을 확장)
function openAgentModal(element) {
  let card = element;

  // 문자열 키값으로 호출되었을 때와 클릭한 카드 요소 자체로 호출되었을 때 모두 대응
  if (typeof element === 'string') {
    const cards = document.querySelectorAll('.agent-card, .map-card, .tip-card');
    card = Array.from(cards).find(c => c.getAttribute('onclick')?.includes(element)) || cards[0];
  } else if (!element || !element.classList) {
    card = event?.currentTarget;
  }

  if (!card) return;

  // 카드 텍스트 정보 읽기
  const titleText = card.querySelector('h3')?.textContent || '공략 정보';
  const tagText = card.querySelector('.agent-role, .tip-tag')?.textContent || '공략가이드';
  const descText = card.querySelector('p')?.textContent || '';

  // 제목 키워드 분석 후 상세 데이터 매칭
  let detailedContent = `<b>상세 가이드:</b><br>${descText}<br><br>• 팀원과의 스킬 연계 및 맵 지형 활용이 승리의 핵심입니다.`;
  
  for (const key in agentMapDetailDatabase) {
    if (titleText.includes(key)) {
      detailedContent = agentMapDetailDatabase[key];
      break;
    }
  }

  // 모달 팝업 요소 연결
  const modal = document.getElementById('agentModal') || document.getElementById('tipModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (modalHeader) {
    modalHeader.className = 'badge';
    modalHeader.textContent = tagText;
  }
  if (modalTitle) modalTitle.textContent = titleText;
  if (modalBody) modalBody.innerHTML = detailedContent;

  if (modal) {
    modal.style.display = 'flex'; // 화면 중앙 배치를 위한 flex 처리
  }
}
// ==========================================
// 맵 전용 클릭 이벤트 보정 함수
// ==========================================
function openMapModal(mapName) {
  const mapData = {
    '바인드': `<b>바인드 전술 상세:</b><br>
    • <b>순간이동기(텔포) 활용:</b> A-B 간 빠르게 이동 가능한 텔레포트로 적의 심리를 교란하세요.<br>
    • <b>주요 전략:</b> 수비 시 A 숏과 B 훅카 지역에 장판 및 연막 스킬을 집중시켜 진입을 억제합니다.<br>
    • <b>추천 요원:</b> 바이퍼, 레이즈, 브림스톤`,

    '어센트': `<b>어센트 전술 상세:</b><br>
    • <b>미드 주도권:</b> 미드(중앙) 지역을 통제하는 팀이 경기 전체 승기를 잡습니다.<br>
    • <b>문 스위치:</b> A/B 사이트 문을 닫거나 부셔서 적의 진입로를 제한하세요.<br>
    • <b>추천 요원:</b> 소바, 오멘, 킬조이`,

    '헤이븐': `<b>헤이븐 전술 상세:</b><br>
    • <b>3개 사이트(A, B, C):</b> 사이트가 3개이므로 백업 속도와 빠른 사운드 정보 공유가 필수입니다.<br>
    • <b>주요 전략:</b> B 사이트 돌파를 노려 적의 인원 배치를 분산시키는 가짜 공격(페이크)이 유효합니다.<br>
    • <b>추천 요원:</b> 브림스톤, 소바, 킬조이`,

    '스플릿': `<b>스플릿 전술 상세:</b><br>
    • <b>고지대(메자닌) 점령:</b> 밧줄 및 2층 지역을 먼저 확보하는 쪽이 교전에서 매우 유리합니다.<br>
    • <b>추천 요원:</b> 레이즈, 사이퍼, 오멘`,

    '아이스박스': `<b>아이스박스 전술 상세:</b><br>
    • <b>수직 지형 활용:</b> 2단 컨테이너와 줄타기 구조물이 많아 고지대 교전 및 헤드라인 고정이 중요합니다.<br>
    • <b>추천 요원:</b> 바이퍼, 세이지, 제트`,

    '브리즈': `<b>브리즈 전술 상세:</b><br>
    • <b>장거리 교전:</b> 교전 거리가 매우 길어 밴달 및 오퍼레이터의 활용도가 극대화되는 맵입니다.<br>
    • <b>추천 요원:</b> 바이퍼, 소바, 제트`,

    '프랙처': `<b>프랙처 전술 상세:</b><br>
    • <b>양방향 진입:</b> 수비팀 진영을 양쪽 밧줄로 에워싸서 공격하는 특수 구조입니다.<br>
    • <b>추천 요원:</b> 브리치, 네온, 킬조이`,

    '펄스': `<b>펄스 전술 상세:</b><br>
    • <b>수중 도시 & 꺾인 각:</b> B롱 구역이 길고 복잡하며 스파이크 오픈 설치 각도가 정형화되어 있습니다.<br>
    • <b>추천 요원:</b> 바이퍼, 페이드, 킬조이`,

    '로터스': `<b>로터스 전술 상세:</b><br>
    • <b>회전문 & 파괴 가능한 벽:</b> C사이트 회전문 소리와 A-B 연결 벽을 파괴하는 타이밍이 핵심입니다.<br>
    • <b>추천 요원:</b> 오멘, 브리치, 게코`,

    '선셋': `<b>선셋 전술 상세:</b><br>
    • <b>미드 주도권 싸움:</b> 미드 교전이 치열하며 B사이트 진입 시 좁은 길목 제어가 중요합니다.<br>
    • <b>추천 요원:</b> 사이퍼, 소바, 오멘`,

    '어비스': `<b>어비스 전술 상세:</b><br>
    • <b>낙사 지형 주의:</b> 외곽 및 사이트 주변 경계선에 벽이 없어 낙사 위험과 낙사 유도 스킬 활용이 핵심입니다.<br>
    • <b>추천 요원:</b> 레이즈, 아스트라, 소바`
  };

  const modal = document.getElementById('agentModal') || document.getElementById('tipModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (modalHeader) {
    modalHeader.className = 'badge';
    modalHeader.textContent = '맵 공략';
  }
  if (modalTitle) modalTitle.textContent = mapName;
  if (modalBody) {
    modalBody.innerHTML = mapData[mapName] || `<b>${mapName} 전술 가이드:</b><br>주요 요원 조합과 사이트 진입 경로를 숙지하여 플레이하세요.`;
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}