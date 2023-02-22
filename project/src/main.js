const dummy_data = [
    {
        name: '청년 창업 지원 정책',
		attribute: '청년',
		logo: "http://www.w3.org/2000/svg", 
		explain: '부가 설명 1',
		policyLink: 'link.kr',
		favor: false
    },
    {
        name: '중년 창업 지원 정책',
		attribute: '중년',
		logo: "http://www.w3.org/2000/svg", 
		explain: '부가 설명 2',
		policyLink: 'link.kr',
		favor: false
    },
	{
        name: '노년 창업 지원 정책',
		attribute: '노년',
		logo: "http://www.w3.org/2000/svg", 
		explain: '부가 설명 3',
		policyLink: 'link.kr',
		favor: false
    }
]

const $app = document.querySelector('.app') // main 태그 선택 

new App({
    $target: $app,
    initState: dummy_data
})