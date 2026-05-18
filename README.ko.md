## 읽어보기 번역

**언어:** [English](README.md) | [简体中文](README.zh-CN.md) | [繁體中文](README.zh-TW.md) | [हिन्दी](README.hi.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [日本語](README.ja.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Italiano](README.it.md) | [한국어](README.ko.md) | [Türkçe](README.tr.md) | [Nederlands](README.nl.md) | [ไทย](README.th.md) | [Tiếng Việt](README.vi.md) | [Polski](README.pl.md) | [Українська](README.uk.md) | [Ελληνικά](README.el.md)

# ChatID 도우미 봇

쉽고 편리하게 채팅 ID를 쉽게 검색하세요! Cloudflare Workers를 기반으로 구축된 이 Telegram 봇에는 서버 배포가 필요하지 않습니다.

**예시 봇**:[ChatIDHelperBot](https://t.me/ChatIDHelperBot)

![screenshot](https://raw.githubusercontent.com/CECEthanClarke/get-chatid-bot-cf-worker/refs/heads/main/other/screenshot.jpg)

* * *

## 배포 가이드

### 1단계: 텔레그램 봇 만들기

1.  이동**@BotFather**텔레그램에서 다음을 사용하세요.`/newbot`봇을 생성하는 명령입니다.
2.  프롬프트에 따라 필요한 정보를 제공하십시오.
3.  일단 생성되면,**@BotFather**봇의 토큰을 보내드립니다. 이 토큰은 배포에 필수적입니다. 나중에 사용할 수 있도록 저장하세요.

### 2단계: Cloudflare 작업자 배포 방법 알아보기

1.  다음을 참조하세요.[Cloudflare 작업자 배포 가이드](https://developers.cloudflare.com/workers/get-started/guide/).
2.  봇의 소스 코드를 다운로드하세요.
3.  달리다`npm run deploy` locally to deploy your worker.  

### 3단계: 필수 환경 변수 구성

봇을 성공적으로 실행하려면 세 가지 환경 변수를 설정해야 합니다.

-   **BOT_TOKEN**
-   **BOT_SECRET_TOKEN**
-   **BOT_LANGUAGE**

자세한 내용은 Cloudflare Workers 설명서를 참조하세요.[환경 변수 추가](https://developers.cloudflare.com/workers/configuration/environment-variables/#add-environment-variables-via-the-dashboard).

#### 세부:

1.  **BOT_TOKEN**: 에서 받은 토큰을 복사하여 붙여넣습니다.**@BotFather**이 변수에.
2.  **BOT_SECRET_TOKEN**: 이는 귀하가 직접 정의한 값입니다. 다음 기준을 충족해야 합니다.
    -   길이는 1~256자입니다.
    -   허용되는 문자:`A-Z`,`a-z`,`0-9`,`_`, 그리고`-`.
    -   이는 봇의 보안을 보장합니다.
3.  **BOT_LANGUAGE**: 선택 사항인 언어 모드입니다. `auto`를 사용하면 사용자 언어와 이름/제목 문자로 자동 감지하며, `zh`, `en`, `ja`, `ko`, `es`, `de`, `fr`, `ru`, `ar`, `fa`, `uk`, `vi`, `tr`, `pt`, `it`, `nl`, `id`, `ms` 같은 지원 코드를 강제로 지정할 수도 있습니다.


### 4단계: 웹훅 URL 설정

웹훅 URL을 구성하려면 브라우저에서 다음 API 엔드포인트에 액세스하세요.

    https://api.telegram.org/bot<token>/setWebhook?url=<url>&secret_token=<BOT_SECRET_TOKEN>

**자리 표시자 바꾸기`<token>`,`<url>`, 그리고`<BOT_SECRET_TOKEN>`실제 값으로:**

-   `<token>`: 봇의 토큰**@BotFather**.
-   `<url>`: 작업자를 배포한 후 Cloudflare에서 제공한 URL입니다.
-   `<BOT_SECRET_TOKEN>`: 3단계에서 정의한 값으로, 정확히 일치하는지 확인합니다.
