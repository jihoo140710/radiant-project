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