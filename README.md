# Markdown 사용법
장점 : 문법이 쉽고 간결, 관리가 쉬움, 지원 가능한 플랫폼과 프로그램이 다양

단점 : 표준x, 모든 html 마크업을 대신하지 못함.

# 제목

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

# 문장(Paragraph)

동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세

# 줄바꿈(Line Breaks)

동해물과 백두산이 마르고 닳도록  
하느님이 보우하사 우리나라 만세  
무궁화 삼천리 화려 강산<br />
대한 사람 대한으로 길이 보전하세  

# 강조 (Emphasis)

_이텔릭_  
**두껍게**  
**_이텔릭 + 두껍게_**  
~~취소선~~  
<u>밑줄</u>  

# 목록(List)

1. 순서가 필요한 목록
1. 순서가 피룡한 목록
1. 순서가 피료한 몬록
1. 순서가 피료한 몬록
   1. 순서가 피료한 몰녹
      1. 순서가 필료앟 몬놁
1. 순서가 피료한 몬록

- 순서가 필요하지 안흔 목록
- 순서가 필요하지 안흔 목록
  - 순서가 필요하지 안흔 목록
    - 순서가필요한 목록
- 순서가 필요하지 안흔 목록

# 링크(Links)

<a href="htps://google.com">Google</a>  
[Google](htps://google.com)

<a href="htps://naver.com" title="NAVER로 이동">Naver</a>  
[Naver](htps://naver.com "Naver로 이동!")

# 이미지(Image)

![Image](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)

[![Image](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)](https://google.com)

# 인용문(BlockQuote)

> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> (네이버 국어 사전)

> 인용문
>> 중첩된 인용문
>>> 중중첩된 인용문

# 인라인(inline) 코드 강조

css에서 `backgorund` 혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할수 있씁니다.

# 블록(block) 코드 강조

```html
<a href="https://google.com">Google</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```javascript
function func() {
  var a= 'aaa';
  return a;
}
```

```bash
$ git commit -m "Study Markdown"
```

```plaintext
동해물과 백두산이 마르고 닳도록
하느님이 보우하사 우리나라 만세
```

# 표(table)

position 속성

값 | 의미    | 기본값
--|:--:|--:
static | 기준 없음 | O
relative | 요소 자신 | x
fixed | 뷰포트   | x

# 원시 HTML(Raw HTML)

동해물과 <u>백두산이</u> 마르고 닳도록<br />
<span style="text-decoration: underline;">하느님이</span> 보우하사 우리나라 만세

<a href="https://google.com" title="Naver로 이동!" target="_blank">Google</a>

<img width="70" src="https://heropy.blog/css/images/logo.png" alt="Heropy" />

# 수평선(Horizontal Rule)

---

***

___