export default function TermsPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4">
			<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
				<p className="text-sm text-gray-500 mb-8">최종 수정일: 2026년 1월 17일</p>

				<div className="space-y-8 text-gray-700">
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제1조 (목적)
						</h2>
						<p className="leading-relaxed">
							본 약관은 토론장(이하 "서비스")이 제공하는 모든 서비스의 이용과 관련하여
							서비스와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을
							목적으로 합니다.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제2조 (정의)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
							<ul className="list-decimal list-inside space-y-2 ml-4">
								<li>
									"서비스"란 토론장이 제공하는 온라인 토론 및 투표 플랫폼을
									의미합니다.
								</li>
								<li>
									"이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을
									말합니다.
								</li>
								<li>
									"회원"이란 서비스에 접속하여 본 약관에 따라 서비스를 이용하는
									자를 말합니다.
								</li>
								<li>
									"게시물"이란 회원이 서비스에 게시한 토론 주제, 댓글, 투표 등의
									정보를 의미합니다.
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제3조 (약관의 효력 및 변경)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이
								발생합니다.
							</p>
							<p>
								2. 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위 내에서 본
								약관을 변경할 수 있습니다.
							</p>
							<p>
								3. 약관이 변경되는 경우, 서비스는 변경사항을 시행일자 7일 전부터
								서비스 내 공지사항을 통해 공지합니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제4조 (서비스의 제공)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>서비스는 다음과 같은 업무를 제공합니다.</p>
							<ul className="list-decimal list-inside space-y-2 ml-4">
								<li>토론 주제 제안 및 투표 서비스</li>
								<li>실시간 투표 현황 및 통계 제공</li>
								<li>댓글 작성 및 의견 교환 서비스</li>
								<li>기타 서비스가 정하는 업무</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제5조 (회원 가입 및 탈퇴)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 회원 가입은 소셜 로그인(카카오, 구글)을 통해 진행되며, 가입
								신청자가 본 약관에 동의한 후 서비스가 정한 절차에 따라 가입을
								완료합니다.
							</p>
							<p>
								2. 회원은 언제든지 서비스 내 설정을 통해 탈퇴를 요청할 수 있으며,
								서비스는 즉시 회원 탈퇴를 처리합니다.
							</p>
							<p>
								3. 회원 탈퇴 시 관련 법령 및 개인정보처리방침에 따라 서비스가
								회원정보를 보유하는 경우를 제외하고는 탈퇴 즉시 회원의 모든 데이터는
								삭제됩니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제6조 (회원의 의무)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>회원은 다음 행위를 하여서는 안 됩니다.</p>
							<ul className="list-decimal list-inside space-y-2 ml-4">
								<li>타인의 정보 도용</li>
								<li>서비스의 정보 및 서비스를 이용한 영리 행위</li>
								<li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
								<li>음란물, 불법 정보 등을 게시하는 행위</li>
								<li>서비스의 안정적 운영을 방해하는 행위</li>
								<li>기타 관련 법령에 위배되는 행위</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제7조 (게시물의 관리)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 회원이 작성한 게시물의 저작권은 해당 게시물의 저작자에게
								귀속됩니다.
							</p>
							<p>
								2. 서비스는 게시물이 관련 법령에 위배되거나 본 약관에 위배되는 경우
								사전 통보 없이 삭제할 수 있습니다.
							</p>
							<p>
								3. 서비스는 건전한 커뮤니티 운영을 위해 게시물을 모니터링할 수
								있습니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제8조 (서비스의 중단)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 서비스는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의
								두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할
								수 있습니다.
							</p>
							<p>
								2. 서비스는 천재지변, 비상사태 등 불가항력적 사유가 있는 경우 서비스
								제공을 중단할 수 있습니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제9조 (면책조항)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를
								제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
							</p>
							<p>
								2. 서비스는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는
								책임을 지지 않습니다.
							</p>
							<p>
								3. 서비스는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성
								등의 내용에 관하여는 책임을 지지 않습니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							제10조 (분쟁의 해결)
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								1. 서비스와 회원 간 발생한 분쟁에 관한 소송은 대한민국 법을
								준거법으로 합니다.
							</p>
							<p>
								2. 서비스와 회원 간 제기된 소송은 민사소송법상의 관할법원에
								제기합니다.
							</p>
						</div>
					</section>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500">
						본 약관은 2026년 1월 17일부터 시행됩니다.
					</p>
				</div>
			</div>
		</div>
	);
}
