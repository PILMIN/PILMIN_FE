export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4">
			<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					개인정보 처리방침
				</h1>
				<p className="text-sm text-gray-500 mb-8">최종 수정일: 2026년 1월 17일</p>

				<div className="space-y-8 text-gray-700">
					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							1. 개인정보의 수집 및 이용 목적
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								토론장(이하 "서비스")은 다음의 목적을 위하여 개인정보를 처리합니다.
								처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
								이용 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를
								받는 등 필요한 조치를 이행할 예정입니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>회원 가입 및 관리: 회원 식별, 본인 확인</li>
								<li>서비스 제공: 토론 참여, 투표, 댓글 작성 등</li>
								<li>서비스 개선: 통계 분석, 서비스 품질 향상</li>
								<li>부정 이용 방지: 비정상적 이용 방지 및 제재</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							2. 수집하는 개인정보의 항목
						</h2>
						<div className="space-y-4 leading-relaxed">
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									가. 카카오 로그인 시 수집 항목
								</h3>
								<ul className="list-disc list-inside space-y-1 ml-4">
									<li>필수: 카카오 계정 ID, 닉네임, 프로필 이미지</li>
									<li>선택: 이메일 주소 (제공 동의 시)</li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									나. 구글 로그인 시 수집 항목
								</h3>
								<ul className="list-disc list-inside space-y-1 ml-4">
									<li>필수: 구글 계정 ID, 이름, 프로필 이미지</li>
									<li>필수: 이메일 주소</li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold text-gray-900 mb-2">
									다. 서비스 이용 과정에서 자동 수집되는 항목
								</h3>
								<ul className="list-disc list-inside space-y-1 ml-4">
									<li>접속 IP 주소, 쿠키, 서비스 이용 기록</li>
									<li>기기 정보 (OS, 브라우저 종류)</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							3. 개인정보의 보유 및 이용 기간
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터
								개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를
								처리·보유합니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									회원 정보: 회원 탈퇴 시까지 (단, 관련 법령에 따라 보존이 필요한
									경우 해당 기간 동안 보관)
								</li>
								<li>
									부정 이용 기록: 부정 이용 방지를 위해 탈퇴 후 1년간 보관 (ID, IP,
									제재 사유)
								</li>
								<li>접속 로그 기록: 통신비밀보호법에 따라 3개월간 보관</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							4. 개인정보의 제3자 제공
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
								다만, 다음의 경우에는 예외로 합니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>이용자가 사전에 동의한 경우</li>
								<li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							5. 개인정보 처리의 위탁
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>서비스는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
							<div className="border border-gray-200 rounded-lg p-4">
								<table className="w-full text-sm">
									<thead>
										<tr className="border-b border-gray-200">
											<th className="text-left py-2 pr-4">수탁업체</th>
											<th className="text-left py-2">위탁업무 내용</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-gray-100">
											<td className="py-2 pr-4">카카오</td>
											<td className="py-2">소셜 로그인 서비스</td>
										</tr>
										<tr>
											<td className="py-2 pr-4">Google</td>
											<td className="py-2">소셜 로그인 서비스</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							6. 정보주체의 권리·의무 및 행사방법
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>개인정보 열람 요구</li>
								<li>개인정보 오류 등이 있을 경우 정정 요구</li>
								<li>개인정보 삭제 요구</li>
								<li>개인정보 처리정지 요구</li>
							</ul>
							<p className="mt-4">
								위 권리 행사는 서비스 내 설정 메뉴를 통해 가능하며, 이메일을 통해서도
								요청하실 수 있습니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							7. 개인정보의 파기
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
								불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>
									파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져
									내부 방침 및 관련 법령에 따라 일정기간 저장된 후 파기됩니다.
								</li>
								<li>
									파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
									방법을 사용하여 삭제합니다.
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							8. 개인정보 보호책임자
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
								처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이
								개인정보 보호책임자를 지정하고 있습니다.
							</p>
							<div className="bg-gray-50 rounded-lg p-4 mt-4">
								<p className="font-semibold">개인정보 보호책임자</p>
								<p className="text-sm mt-2">이메일: privacy@toronjang.com</p>
								<p className="text-sm">
									※ 개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에
									문의하시기 바랍니다.
								</p>
								<ul className="text-sm mt-2 space-y-1">
									<li>• 개인정보침해신고센터 (privacy.kisa.or.kr / 118)</li>
									<li>• 개인정보 분쟁조정위원회 (kopico.go.kr / 1833-6972)</li>
									<li>
										• 대검찰청 사이버수사과 (www.spo.go.kr / 1301 (內選 2))
									</li>
									<li>• 경찰청 사이버안전국 (cyberbureau.police.go.kr / 182)</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							9. 개인정보 처리방침의 변경
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
								변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
								전부터 공지사항을 통하여 고지할 것입니다.
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							10. 쿠키의 운영 및 관리
						</h2>
						<div className="space-y-3 leading-relaxed">
							<p>
								서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용 정보를
								저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
							</p>
							<ul className="list-disc list-inside space-y-2 ml-4">
								<li>쿠키의 사용 목적: 로그인 세션 유지, 서비스 이용 기록 분석</li>
								<li>
									쿠키의 설치·운영 및 거부: 웹브라우저 상단의 도구 &gt; 인터넷 옵션
									&gt; 개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수
									있습니다.
								</li>
								<li>
									쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
									있습니다.
								</li>
							</ul>
						</div>
					</section>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-200">
					<p className="text-sm text-gray-500">
						본 개인정보 처리방침은 2026년 1월 17일부터 시행됩니다.
					</p>
				</div>
			</div>
		</div>
	);
}
