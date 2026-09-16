# 반석치과보존과치과의원 — 통합 리뉴얼 제안 시안

원장님께 제안하기 위한 **홈페이지 통합 리뉴얼 초안**입니다.
순수 HTML/CSS/JS로 만든 정적 페이지라 빌드 과정 없이 `index.html`을 바로 열거나
GitHub Pages 등 아무 정적 호스팅에 올리면 바로 동작합니다.

## 왜 이 시안을 제안하는가

현재 두 개의 사이트가 따로 운영되고 있습니다.

- **bsdent.co.kr (메인)** — 본문 전체가 이미지 한 장씩(`bsdent00~10.jpg` 등)이라
  실제 텍스트가 없음 → 검색엔진과 AI 답변엔진(AEO/GEO)이 내용을 읽지 못함
- **blog.bsdent.co.kr (서브)** — 텍스트는 있지만 메인과 분리되어 있어 정보가 나뉨

이 시안은 **두 사이트의 내용을 한 곳에 텍스트로 통합**하고, 별도 업체 비용 없이
`schema.org` 구조화 데이터(JSON-LD)를 코드에 직접 넣어 AEO/GEO 대응력을 높인 버전입니다.
- `Dentist` 스키마 — 병원명·주소·전화·진료시간·원장 정보를 검색엔진이 바로 인식
- `FAQPage` 스키마 — FAQ 20문항을 그대로 구조화해 AI 답변엔진 노출 가능성 강화

## 구조

```
index.html      메인 페이지 (HOME / PHILOSOPHY / MEDICAL STAFF / TREATMENT / FAQ / LOCATION)
                 + Dentist/FAQPage JSON-LD 구조화 데이터 포함
css/style.css   전체 스타일
js/main.js      모바일 메뉴, 스크롤 애니메이션, FAQ 아코디언, 사이드 인덱스, 문의 폼
images/         실제 사진 추가 시 이 폴더 사용
bsdentScreenShot/  기존 메인 홈페이지 스크린샷 원본(1~33번, 콘텐츠 참고용)
```

## 콘텐츠 반영 현황

원장님 약력, 진료철학 5대 약속, 진료과목 7종 상세 설명, FAQ 5개 카테고리 20문항,
주소·전화·진료시간·교통 안내는 기존 두 사이트의 실제 내용을 그대로 옮겨 채웠습니다.

남은 것은 아래 두 가지뿐입니다.

- [ ] 원장님 프로필 사진 → `.staff-photo` 자리에 실제 사진 `<img>`로 교체
- [ ] 지도 → `.map-box`는 현재 카카오맵 검색 링크로 연결됨. 원하면 iframe embed로 교체 가능
- [ ] 상담 신청 폼 → 지금은 `alert()`만 뜸. 실제 예약 시스템/전화연결/카카오톡 채널 연동 필요

## GitHub Pages로 배포하기

1. 저장소 Settings → Pages
2. Source를 `Deploy from a branch`, Branch를 `main` / `/ (root)`로 설정
3. 저장 후 `https://jinhyeokan.github.io/bsdent/` 로 접속 가능
