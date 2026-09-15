# BANSIK DENTAL — 반석보존치과 홈페이지

순수 HTML/CSS/JS로 만든 정적 홈페이지입니다. 빌드 과정 없이 `index.html`을 바로 열거나,
GitHub Pages 등 아무 정적 호스팅에 올리면 동작합니다.

## 구조

```
index.html      메인 페이지 (HOME / PHILOSOPHY / MEDICAL STAFF / TREATMENT / FAQ / LOCATION)
css/style.css   전체 스타일
js/main.js      모바일 메뉴, 스크롤 애니메이션, FAQ 아코디언, 사이드 인덱스, 문의 폼
images/         실제 사진 추가 시 이 폴더 사용
```

## 실제 운영 전 꼭 교체해야 할 부분

`index.html` 안에 `(...입력 필요)`, `PROFILE PHOTO`, `MAP EMBED`로 표시된 부분입니다.

- [ ] 원장님 성함/약력/자격 목록 (`#staff` 섹션)
- [ ] 원장님 프로필 사진 → `.staff-photo` 자리에 `<img>`로 교체
- [ ] 병원 주소, 전화번호, 진료시간 (`#contact` 섹션, `footer` 안 전화번호도 함께)
- [ ] 지도 → `.map-box` 자리에 네이버지도/카카오맵 embed iframe으로 교체
- [ ] FAQ 답변 문구 (실제 상담 기준으로 검수 필요)
- [ ] 상담 신청 폼 → 지금은 `alert()`만 뜸. 실제 예약 시스템/전화연결/카카오톡 채널 등으로 연동 필요

## GitHub Pages로 배포하기

1. 저장소 Settings → Pages
2. Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 설정
3. 저장 후 `https://jinhyeokan.github.io/bsdent/` 로 접속 가능
