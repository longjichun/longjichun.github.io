var arr = []
arr.length = 10;
var [a1,a2,a3,a4,a5,a6,a7,a8,a10] = arr;
var [lenA,lenB,lenC,lenD] = [0,0,0,0]
var lenArr = [lenA, lenB, lenC, lenD]
var minCount = Math.min.call(null,...lenArr)
var maxCount = Math.max.call(null,...lenArr)
var an = []

var NUM = 4**10;
var init = ['A',"B",'C',"D"]
for(let i=0;i<4;i++) {
	let _ = init[i]
	[lenA,lenB,lenC,lenD] = [0,0,0,0]
	window['len'+_]++
	arr[0] = _
	for(let j=0;j<4;j++) {
		let _ = init[j]
		window['len'+_]++
		arr[1] = _
		for(let k=0;k<4;k++) {
			let _ = init[k]
			window['len'+_]++
			arr[2] = _
			for(let l=0;l<4;l++) {
				let _ = init[l]
				window['len'+_]++
				arr[3] = _
				for(let q=0;q<4;q++) {
					let _ = init[q]
					window['len'+_]++
					arr[4] = _
					for(let m=0;m<4;m++) {
						let _ = init[m]
						window['len'+_]++
						arr[5] = _
						for(let r=0;r<4;r++) {
							let _ = init[r]
							window['len'+_]++
							arr[6] = _
							for(let n=0;n<4;n++) {
								let _ = init[n]
								window['len'+_]++
								arr[7] = _
								for(let o=0;o<4;o++) {
									let _ = init[o]
									window['len'+_]++
									arr[8] = _
									for(let p=0;p<4;p++) {
										let _ = init[p]
										window['len'+_]++
										arr[9] = _
										var out = run()
										if(out) {
											an.push(arr)
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function run() {
	[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10] = arr;
	lenArr = [lenA, lenB, lenC, lenD]
	minCount = Math.min.call(null,...lenArr)
	maxCount = Math.max.call(null,...lenArr)
	if( !z() ) return false;
	if( !a() ) return false;
	if( !b() ) return false;
	if( !c() ) return false;
	if( !d() ) return false;
	if( !e() ) return false;
	if( !f() ) return false;
	if( !g() ) return false;
	return true;
}

function z() {
	// 3
	// 3 4 2 6
	return ( a3 != a6 && a6 == a2 && a6 == a4 ) ||  
			( a3 == a6 && a6 == a2 && a2 != a4 ) || 
			( a3 == a6 && a6 != a2 && a6 == a4 ) ||
			( a3 == a2 && a4 == a2 && a6 != a4 ) 
}

function a() {
    // 4
    return a1 == a5 || a2 == a7 || a1 == a9 || a6 == a10;
}

function b() {
    // 5
    return a5 == a4 || a5 == a7 || a5 == a8 || a5 == a9;
}

function c() {
    // 6
    return (a8 == a2 && a8== a4) || (a8 == a1 && a8 == a6) || (a8 == a3 && a8 == a10) || (a8 == a5 && a8 == a9);
}

function d() {
	// 7
	return lenArr.indexOf(minCount) == lenArr.indexOf(minCount)
}
function e() {
	// 8
	var cca1 = a1.charCodeAt()
	var cca2 = a2.charCodeAt()
	var cca5 = a5.charCodeAt()
	var cca7 = a7.charCodeAt()
	var cca10 = a10.charCodeAt()

	var sub12 = Math.abs(cca1-cca2)
	var sub15 = Math.abs(cca1-cca5)
	var sub17 = Math.abs(cca1-cca7)
	var sub110 = Math.abs(cca1-cca10)
	return  (sub12 !=1 && sub15==1 && sub17==1 && sub110==1) || 
			(sub12 ==1 && sub15!=1 && sub17==1 && sub110==1) ||
			(sub12 ==1 && sub15==1 && sub17!=1 && sub110==1) ||
			(sub12 ==1 && sub15==1 && sub17==1 && sub110!=1) 
}
function f() {
	// 9 
	var bol16 = ( a1 == a6 )
	var bol56 = ( a5 == a6 )
	var bol510 = ( a5 == a10 )
	var bol52 = ( a5 == a2 )
	var bol59 = ( a5 == a9 )
	return (bol16 + bol56 == 1) && (bol16 + bol510 !=1) && (bol16 + bol52 !=1) && (bol16 + bol59 !=1) ||
		(bol16 + bol56 != 1) && (bol16 + bol510 ==1) && (bol16 + bol52 !=1) && (bol16 + bol59 !=1) ||
		(bol16 + bol56 != 1) && (bol16 + bol510 !=1) && (bol16 + bol52 ==1) && (bol16 + bol59 !=1) ||
		(bol16 + bol56 != 1) && (bol16 + bol510 !=1) && (bol16 + bol52 !=1) && (bol16 + bol59 ==1) 
}

function g() {
	// 10
	

	var sub = maxCount-minCount;
	return sub==1 || sub == 2 || sub==3 || sub == 4
}