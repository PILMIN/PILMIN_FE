"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef } from "react";
import chatIcon from "@/assets/chat.svg";
import electricIcon from "@/assets/electric.svg";
import graphIcon from "@/assets/graph.svg";
import guardIcon from "@/assets/guard.svg";
import peopleIcon from "@/assets/people.svg";
import voteIcon from "@/assets/vote.svg";

function FadeInOnScroll({
	children,
	className = "",
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => {
						entry.target.classList.add("opacity-100", "translate-y-0");
						entry.target.classList.remove("opacity-0", "translate-y-8");
					}, delay);
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [delay]);

	return (
		<div
			ref={ref}
			className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
		>
			{children}
		</div>
	);
}

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			<section className="bg-white py-20 px-4">
				<div className="max-w-4xl mx-auto text-center">
					<FadeInOnScroll>
						<p className="text-blue-500 text-sm mb-4">
							실시간 투표 토론 플랫폼
						</p>
					</FadeInOnScroll>
					<FadeInOnScroll delay={100}>
						<h1 className="text-5xl font-bold mb-4">
							모두의 의견이
							<br />
							<span className="text-blue-500">모이는 곳</span>
						</h1>
					</FadeInOnScroll>
					<FadeInOnScroll delay={200}>
						<p className="text-gray-600 mb-8">
							찬성과 반대, 당신의 한 표로 시작되는 토론.
							<br />
							실시간 투표와 댓글로 의견을 나눠보세요.
						</p>
					</FadeInOnScroll>

					<FadeInOnScroll delay={300}>
						<div className="flex justify-center gap-4 mb-16">
							<button
								type="button"
								className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
							>
								<span>✓</span>
								지금 참여하기
							</button>
							<button
								type="button"
								className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
							>
								더 알아보기
							</button>
						</div>
					</FadeInOnScroll>

					<FadeInOnScroll delay={400}>
						<div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
							<div className="flex justify-between items-center mb-6">
								<h3 className="text-lg font-semibold text-left">
									AI가 인문학의 미래를 바꿀까요?
								</h3>
								<span className="text-sm text-gray-500">진행중</span>
							</div>

							<div className="space-y-3">
								<div className="flex justify-between text-sm">
									<div className="flex items-center gap-2">
										<span className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-green-500"></span>
										<span className="font-medium">찬성</span>
										<span className="text-green-500 font-bold">68%</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="text-red-500 font-bold">32%</span>
										<span className="font-medium">반대</span>
										<span className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-red-500"></span>
									</div>
								</div>

								<div className="w-full h-4 rounded-full overflow-hidden flex">
									<div
										className="bg-gradient-to-r from-green-400 to-green-500 h-full"
										style={{ width: "68%" }}
									></div>
									<div
										className="bg-gradient-to-r from-red-400 to-red-500 h-full"
										style={{ width: "32%" }}
									></div>
								</div>
							</div>

							<div className="flex gap-6 text-sm text-gray-500 mt-6">
								<span className="flex items-center gap-1.5">
									<Image
										src={peopleIcon}
										alt="참여"
										width={16}
										height={16}
										className="opacity-50"
									/>
									1,238명 참여
								</span>
								<span className="flex items-center gap-1.5">
									<Image
										src={chatIcon}
										alt="댓글"
										width={16}
										height={16}
										className="opacity-50"
									/>
									523개 댓글
								</span>
							</div>
						</div>
					</FadeInOnScroll>
				</div>
			</section>

			<section className="bg-white py-16 px-4">
				<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<FadeInOnScroll delay={0}>
						<div>
							<h3 className="text-4xl font-bold text-blue-500 mb-2">12K+</h3>
							<p className="text-gray-600">활성 사용자</p>
						</div>
					</FadeInOnScroll>
					<FadeInOnScroll delay={100}>
						<div>
							<h3 className="text-4xl font-bold text-blue-500 mb-2">850+</h3>
							<p className="text-gray-600">진행중인 토론</p>
						</div>
					</FadeInOnScroll>
					<FadeInOnScroll delay={200}>
						<div>
							<h3 className="text-4xl font-bold text-blue-500 mb-2">45K+</h3>
							<p className="text-gray-600">총 투표 수</p>
						</div>
					</FadeInOnScroll>
					<FadeInOnScroll delay={300}>
						<div>
							<h3 className="text-4xl font-bold text-blue-500 mb-2">98%</h3>
							<p className="text-gray-600">만족도</p>
						</div>
					</FadeInOnScroll>
				</div>
			</section>

			<section className="bg-gray-50 py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<FadeInOnScroll>
						<h2 className="text-4xl font-bold text-center mb-4">
							왜 <span className="text-blue-500">토론장</span>일까요?
						</h2>
					</FadeInOnScroll>
					<FadeInOnScroll delay={100}>
						<p className="text-center text-gray-600 mb-16">
							쉽고 간편하게, 모두의 의견을 하나로 모읍니다
						</p>
					</FadeInOnScroll>

					<div className="grid md:grid-cols-3 gap-6 mb-12">
						<FadeInOnScroll delay={0}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={voteIcon} alt="투표" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">실시간 투표</h3>
								<p className="text-gray-600">
									찬성과 반대, 클릭 한 번으로 의견을 표현하세요. 투표는 언제든
									변경 가능합니다.
								</p>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={100}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={graphIcon} alt="그래프" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">실시간 그래프</h3>
								<p className="text-gray-600">
									찬반 비율을 한눈에 확인하세요. 실시간으로 업데이트되는 투표
									현황을 볼 수 있습니다.
								</p>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={200}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={chatIcon} alt="채팅" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">자유로운 토론</h3>
								<p className="text-gray-600">
									댓글로 의견을 나누세요. 찬성/반대 배지로 어떤 입장인지 한눈에
									보입니다.
								</p>
							</div>
						</FadeInOnScroll>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						<FadeInOnScroll delay={0}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={peopleIcon} alt="사람들" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">주제 제안</h3>
								<p className="text-gray-600">
									궁금한 주제가 있나요? 직접 제안해보세요. 관리자 승인 후 토론이
									시작됩니다.
								</p>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={100}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={electricIcon} alt="번개" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">간편한 로그인</h3>
								<p className="text-gray-600">
									가입도, 구글 계정으로 3초 만에 시작하세요. 복잡한 가입 절차는
									없습니다.
								</p>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={200}>
							<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full">
								<div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
									<Image src={guardIcon} alt="보안" width={24} height={24} />
								</div>
								<h3 className="text-xl font-bold mb-3">안전한 커뮤니티</h3>
								<p className="text-gray-600">
									건전한 토론 문화를 위해 관리자가 24시간 모니터링 합니다.
								</p>
							</div>
						</FadeInOnScroll>
					</div>
				</div>
			</section>

			<section className="bg-white py-20 px-4">
				<div className="max-w-4xl mx-auto">
					<FadeInOnScroll>
						<h2 className="text-4xl font-bold text-center mb-4">
							어떻게 <span className="text-blue-500">사용하나요?</span>
						</h2>
					</FadeInOnScroll>
					<FadeInOnScroll delay={100}>
						<p className="text-center text-gray-600 mb-16">
							3단계로 시작하는 간편한 토론
						</p>
					</FadeInOnScroll>

					<div className="space-y-6">
						<FadeInOnScroll delay={0}>
							<div className="flex gap-6 items-start">
								<div className="bg-blue-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
									1
								</div>
								<div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 hover:shadow-md transition">
									<h3 className="text-xl font-bold mb-2">
										관심 있는 주제 찾기
									</h3>
									<p className="text-gray-600">
										홈 화면에서 다양한 토론 주제를 둘러보고, 관심 가는 주제를
										선택하세요.
									</p>
								</div>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={100}>
							<div className="flex gap-6 items-start">
								<div className="bg-blue-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
									2
								</div>
								<div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 hover:shadow-md transition">
									<h3 className="text-xl font-bold mb-2">
										찬성 또는 반대 투표
									</h3>
									<p className="text-gray-600">
										주제를 읽고 당신의 의견을 투표하세요. 실시간으로 결과가
										반영됩니다.
									</p>
								</div>
							</div>
						</FadeInOnScroll>

						<FadeInOnScroll delay={200}>
							<div className="flex gap-6 items-start">
								<div className="bg-blue-500 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
									3
								</div>
								<div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 hover:shadow-md transition">
									<h3 className="text-xl font-bold mb-2">댓글로 의견 나누기</h3>
									<p className="text-gray-600">
										다른 사람들과 댓글로 토론하며 생각을 공유하세요.
									</p>
								</div>
							</div>
						</FadeInOnScroll>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
				<div className="max-w-2xl mx-auto text-center">
					<FadeInOnScroll>
						<h2 className="text-4xl font-bold mb-4">지금 바로 시작하세요</h2>
					</FadeInOnScroll>
					<FadeInOnScroll delay={100}>
						<p className="text-gray-600 mb-8">
							수천 명이 함께하는 토론에 참여하고
							<br />
							당신의 목소리를 들려주세요
						</p>
					</FadeInOnScroll>

					<FadeInOnScroll delay={200}>
						<button
							type="button"
							className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-600 transition shadow-lg flex items-center gap-2 mx-auto"
						>
							<span>✓</span>
							무료로 시작하기
						</button>
					</FadeInOnScroll>

					<FadeInOnScroll delay={300}>
						<p className="text-sm text-gray-500 mt-4">
							무료 참여 · 3초만에 가입 완료
						</p>
					</FadeInOnScroll>
				</div>
			</section>
		</div>
	);
}
