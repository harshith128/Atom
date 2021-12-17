import { Typography } from "@mui/material";
import React from "react";
import Creator from "./Creator";

export default function FullCreator() {
	return (
		<div
			style={{
                // borderBottom: "1px solid #A3A3A3",
                borderTop: "1px solid #ebebeb",
			}}
		>
			<Typography
				variant="body2"
				style={{
					textAlign: "left",
					marginLeft: "9.5%",
					marginTop: "5%",
					marginBottom: "3%",
					color: "#000000",
				}}
			>
				CREATOR SUCCESS STORIES
			</Typography>
			<div
				style={{
					display: "flex",
                    marginLeft: "9.5%",
                    marginBottom:"8%"
				}}
			>
				<Creator
					url={
						"https://s3-alpha-sig.figma.com/img/55c3/abd1/893ad2b6ef0050857cb2d9bb1a90f3bb?Expires=1640563200&Signature=BQIFiZu5m-cC64CJqrTVJddjLb5bsSeGh7E4kF7kT18cY8YFy41Mxm4sfFn3a6eg~Hj4JxP0NfHQ4-7Wkyeuch3Wsmw6OWKZTQvXTl7OXSsStk~uKxsDqINKJ1G0Yx3X8-vOik7anfBeTd7hNbfbKjy3lJZ6YnDWyL~On0-2C-0qAdbaTmZWbb12mda597A0Uqf~vbXMLzO5J5cfTt1551LBlX~N2YIrdIFXt89pwwdiqHDjWhTL8MjWAGTQ-FCCeWwYzWtS7AlQ3lmWPnXmmWsGb6QWvtBi772kDqMDIYW6Olux60sbT3ON~8l9yJ6UEOWK4eLgKxmhgATtBIJz3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
					}
					caption="Community Engagement"
					title="Reviving ‘Wax Poetics,’ the cult magazine for long-form music journalism and vinyl culture"
					content="After the magazine closed down, longtime readers Alex Bruh and David Holt launched a campaign to rally an existing and expanding community."
				></Creator>
				<Creator
					url={
						"https://s3-alpha-sig.figma.com/img/3c50/6fbd/c49c3dc4a6a5e3ac8959164092d8fd5f?Expires=1640563200&Signature=Jv0Zj8dRqvcjeQ6FN-NEd1UtjHip0apr5Oiwhv8MVejpKt1KvKtB9pW6u1LTVILRrKAScSmrNNvQMo8Z3WbjG6czKQCCNH1M5jStAEm5gQXhtcRI0gdqUw-Ve-iD~mNcnOmYAFCtB0xWzGFeoq3Ltijh8YhiyE8wAcmsZjvEogTS9FhJPO0JY7I-ncvemnMJA7Uaf2KPntbboYl~DZE4rvE5YErIXo1O0ub1PW5gYzpuZPeCNnMyNhdoaMlLj12Sys7Jge3MyUQQy-YlGK69Ny1ZXb6~iW1TgVVnTaHv9NWScTCWHyVspXQeMMJn1g5e7Ao7ZWmz-NWP4zThgq-gmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
					}
					caption="Small bussiness"
					title="How tarot creator Krystal Banner strengthens her intuition—and business—on Kickstarter"
					content="The all-or-nothing crowdfunding model can serve as a poll on what projects are worth her time."
				></Creator>
				<Creator
					url={
						"https://s3-alpha-sig.figma.com/img/4afa/3add/73950eed0e94291256ba166a7a3ef506?Expires=1640563200&Signature=SNVdckcgDKYgpQAAgVlgN2tf6WmQsaLT4Gfzm0UgXWpmKtQdTjmJsd44-PdIDO0Oj7Q4NETjQl~TvOtnAwiDeb~L4zHBNBBCe4LmZZM00agJRalEgSgMVHoDb7Lr4p4KpVRKokC-OZHvzVJ~ORGcsozfT2USBoFRkD53P02dKFl8E71MSgIKHmd4CUAGW4eHce0rv8lJuY64vVf1RN2K8BCqjMSHbs~5MGEhZUOUthL3tmchsPXXDWeb3n66p-XHd5KoxB7-ajC149MjPSlNj~fYg3gHFeS9mHJsCHWBs0jTlXOwZAW9p34MZjOK0S~bwHBCkrVkjlMzgJXCPpQpKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
					}
					caption="Community Engagement"
					title="Creators: Plan what you can, but prepare for twists and turns"
					content="This poet and printer wanted to engage the communities along the Columbia River. It didn’t go exactly as planned, but their go-with-the-flow attitude brought them through."
				></Creator>
				<Creator
					url={
						"https://s3-alpha-sig.figma.com/img/c0f1/cc3e/e6f647453e14eaa6c880e57814b37548?Expires=1640563200&Signature=XH1k8OpbNKhlRz5qzu-kJY5lBlclOs28R4vxiCIDVdSVWXYTaXhFKYsxoH4Qc~ofcNBpTtlvzAG1xi1FZ5-HdQMLAdUYg4x03rb74cTLv2YBWKKguQl8X9fzZsnFHbo7cnxUiZNv34IPEw-aMrsgxukjkFHar7KClX4zKe-G27M0wfFbMjoFnoRpNTcJ03gUoeLdVWn5ekaifWjMgt9L~ZZ741c7EKqRkv-tJxt1-cZ3m1aPgI6Px9K8314Lo~me2kfu7TvQnGt-~imjEOaGVncBRMYIFs0xnTqys8fz6mBMYU9MRwEcYXxYE6cYsxeWMBmsBIq7j69d8C5A3gLgpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
					}
					caption="Community Engagement"
					title="Craighton Berman's advice for simple creative campaigns"
					content="This designer relies on big campaigns to build his independent practice. But here’s how he gives himself a break—and new opportunities—with smaller campaigns."
				></Creator>
			</div>
		</div>
	);
}
