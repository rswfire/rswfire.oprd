export type OutreachLink = {
    label: string;
    href: string;
};

export type OutreachEntry = {
    id: string;
    anchor: string;
    title: string;
    audience: string;
    startingPoints: OutreachLink[];
    context?: string;
    fields: string[];
    tracking?: OutreachTrackingField[];
    dispatch?: OutreachDispatch;
    status: string;
};

export type OutreachTrackingField = {
    label: string;
    value: string;
    href?: string;
    links?: OutreachLink[]; // multiple documents, each on its own line
};

export type OutreachDispatch = {
    dateSent: string;
    material: string;
    correspondence?: OutreachLink[];
    responseDate?: string;
    response?: string | OutreachLink;
    nextAction?: string;
};

export type OutreachGroup = {
    id: string;
    title: string;
    introduction?: string;
    entries: OutreachEntry[];
};

export const OUTREACH_GROUPS: OutreachGroup[] = [
    {
        id: "oregon-legislature",
        title: "Oregon Legislature",
        entries: [
            {
                id: "OR-01",
                anchor: "or-constituents",
                title: "Oregon legislators",
                audience: "Constituent request to examine the documented handling of a state park volunteer, including the absence of a meaningful route to contest an adverse account; ask what legislative oversight or statewide safeguards could address that gap.",
                startingPoints: [{ label: "Oregon legislative districts", href: "https://www.oregonlegislature.gov/FindYourLegislator/leg-districts.html" }],
                fields: ["Recipient / office", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "OR-02",
                anchor: "or-parks",
                title: "House and Senate natural-resources / parks policy committees",
                audience: "OPRD volunteer-program governance: written standards, notice of allegations, a route to challenge a supervisor's account, appeal or review mechanisms, and protections when volunteers document or report concerns.",
                startingPoints: [{ label: "Oregon legislative committees", href: "https://www.oregonlegislature.gov/committees" }],
                fields: ["Committee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "OR-03",
                anchor: "or-labor",
                title: "House and Senate labor / workforce policy committees",
                audience: "The position of unpaid public-service volunteers who may lack the procedural and retaliation protections available in employment relationships; the overlap created when the park supervisor overseeing a volunteer assignment was also the hiring manager who received the volunteer's application for paid state employment; and whether statewide volunteer-specific safeguards merit legislative examination.",
                startingPoints: [{ label: "Oregon legislative committees", href: "https://www.oregonlegislature.gov/committees" }],
                fields: ["Committee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "OR-04",
                anchor: "or-audits",
                title: "Joint Committee on Legislative Audits",
                audience: "Agency accountability and controls: how complaints about volunteer-program conduct are received, reviewed, documented, escalated, and audited; how agency referrals to law enforcement are governed and recorded.",
                startingPoints: [{ label: "Oregon Legislative Information System", href: "https://olis.oregonlegislature.gov/" }],
                fields: ["Committee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                tracking: [
                    { label: "Committee / recipient", value: "Senator Kate Lieber and Representative Tawna Sanchez, Co-Chairs" },
                    { label: "Contact / submission route", value: "Email to the co-chairs' legislative offices" },
                    { label: "Date sent", value: "September 23, 2026" },
                    { label: "Correspondence sent", value: "September 23, 2026 · Request for audit consideration: OPRD volunteer-program controls", href: "/record/outreach/01M36JQV3RZHQCT4RRPP35JRJC/" },
                    { label: "Material and version sent", value: "", links: [
                        { label: "Request for audit consideration", href: "/records/outreach/attachments/01m36jqv3rzhqct4rrpp35jrjc-2026-09-23-joint-committee-legislative-audits.pdf" },
                        { label: "Testimony v1.10", href: "/records/outreach/attachments/01m36jqv3rzhqct4rrpp35jrjc-testimony-of-robert-samuel-white-v1-10.pdf" },
                    ] },
                    { label: "Specific request made", value: "Recommend the performance audit of OPRD volunteer-program controls now before the Audits Division." },
                    { label: "Response received / date", value: "September 23, 2026 · Both co-chairs answered: directed to the Audits Division", href: "/record/outreach/01M37F6ZBRRW96CRGD4JMJQSSY/" },
                    { label: "Follow-up / date", value: "None" },
                ],
                dispatch: {
                    dateSent: "September 23, 2026",
                    material: "Audit-consideration letter · Testimony v1.10",
                    correspondence: [
                        { label: "September 23, 2026 · Request for audit consideration: OPRD volunteer-program controls", href: "/record/outreach/01M36JQV3RZHQCT4RRPP35JRJC/" },
                    ],
                    responseDate: "September 23, 2026",
                    response: { label: "Audit request directed to the Audits Division", href: "/record/outreach/01M37F6ZBRRW96CRGD4JMJQSSY/" },
                },
                status: "Response received",
            },
            {
                id: "OR-05",
                anchor: "or-budget",
                title: "Joint Ways and Means / relevant budget subcommittee",
                audience: "How OPRD's publicly funded volunteer program is administered, what resources and accountability systems support it, and what oversight accompanies agency spending on complaint handling and escalation. Keep requests tied to budget, staffing, controls, or program administration.",
                startingPoints: [{ label: "Oregon legislative committees", href: "https://www.oregonlegislature.gov/committees" }],
                fields: ["Committee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "OR-06",
                anchor: "or-lpro",
                title: "Legislative Policy and Research Office (LPRO)",
                audience: "Request procedural routing: identify the committees and staff covering OPRD, volunteer protections, and audit oversight; ask how to make the archive available as background material. LPRO supports legislative work and public engagement; it is not an independent investigative body.",
                startingPoints: [
                    { label: "LPRO", href: "https://www.oregonlegislature.gov/lpro/" },
                    { label: "Committee services", href: "https://www.oregonlegislature.gov/lpro/Pages/committee-services.aspx" },
                ],
                fields: ["Recipient / staff contact", "Contact / submission route", "Date sent", "Material and version sent", "Routing information received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "OR-07",
                anchor: "or-testimony",
                title: "Official committee testimony through OLIS",
                audience: "For an actual hearing on a relevant bill or topic, submit a concise account of the policy issue and link to the archive and underlying primary records. This is an event-dependent channel, not a general inbox for testimony at any time.",
                startingPoints: [
                    { label: "OLIS", href: "https://olis.oregonlegislature.gov/" },
                    { label: "Public participation", href: "https://www.oregonlegislature.gov/citizen_engagement/Pages/Submit-Exhibits.aspx" },
                ],
                fields: ["Bill / hearing / committee", "Hearing date", "Submission window confirmed", "Date submitted", "Testimony link / exhibit number", "Response / subsequent action", "Follow-up / date"],
                status: "Awaiting relevant hearing",
            },
        ],
    },
    {
        id: "oregon-independent-oversight",
        title: "Oregon independent oversight",
        entries: [
            {
                id: "OR-08",
                anchor: "or-sos-audits",
                title: "Oregon Secretary of State, Audits Division",
                audience: "Request performance audit consideration of the controls governing an OPRD volunteer complaint, the Director's promised departmental review, and OPRD's referral of the volunteer's correspondence to law enforcement. The letter asks about complaint procedure, records of promised reviews, referral standards and approvals, and the controls that apply when a referral results in a Major Crimes investigation and a visit to a volunteer's home and workplace.",
                startingPoints: [],
                fields: ["Recipient / contact", "Date sent", "Correspondence sent", "Material and version sent", "Specific audit question", "Response received / date", "Follow-up / date"],
                tracking: [
                    { label: "Recipient / contact", value: "Oregon Secretary of State, Audits Division", href: "https://sos.oregon.gov/audits/Pages/default.aspx" },
                    { label: "Date sent", value: "September 21, 2026" },
                    { label: "Correspondence sent", value: "September 21, 2026 · Request for Performance Audit Consideration: Oregon State Parks Volunteer-Program Controls", href: "/record/outreach/01M33JN6E8NEE7XQSHSDRNNVJH/" },
                    { label: "Material and version sent", value: "", links: [
                        { label: "Request for performance audit consideration", href: "/records/outreach/attachments/01m33jn6e8nee7xqshsdrnnvjh-2026-09-21-oregon-secretary-of-state-audits.pdf" },
                        { label: "Testimony v1.9", href: "/records/outreach/attachments/01m33jn6e8nee7xqshsdrnnvjh-testimony-of-robert-samuel-white-v1-9.pdf" },
                    ] },
                    { label: "Specific audit question", value: "Whether the controls governing volunteer complaints, promised departmental reviews, and referrals to law enforcement warrant examination." },
                    { label: "Response received / date", value: "None received" },
                    { label: "Follow-up / date", value: "None" },
                ],
                dispatch: {
                    dateSent: "September 21, 2026",
                    material: "Audit request · Testimony v1.9",
                    correspondence: [
                        { label: "September 21, 2026 · Request for Performance Audit Consideration: Oregon State Parks Volunteer-Program Controls", href: "/record/outreach/01M33JN6E8NEE7XQSHSDRNNVJH/" },
                    ],
                    response: "None received",
                },
                status: "Sent · Awaiting response",
            },
            {
                id: "OR-09",
                anchor: "or-hotline",
                title: "State Government Waste Hotline",
                audience: "Report any specific, documented suspected waste, inefficiency, or abuse of Oregon government resources related to the operation or its aftermath.",
                startingPoints: [
                    { label: "Government Waste Hotline", href: "https://sos.oregon.gov/audits/pages/accountability.aspx" },
                ],
                fields: ["Report reference / recipient", "Date submitted", "Specific resource-use concern and records", "Material and version sent", "Response received / date", "Follow-up / date"],
                status: "Not submitted",
            },
            {
                id: "OR-10",
                anchor: "or-boli",
                title: "Oregon Bureau of Labor and Industries, Civil Rights Division",
                audience: "Employment protections for applicants to paid state employment when the park supervisor overseeing the volunteer assignment was also the hiring manager who received the application for the paid position.",
                startingPoints: [{ label: "BOLI civil-rights complaints", href: "https://www.oregon.gov/boli/civil-rights/Pages/complaints.aspx" }],
                fields: ["Complaint reference / recipient", "Date submitted", "Specific conduct identified", "Material and version sent", "Response received / date", "Follow-up / date"],
                status: "Not submitted",
            },
            {
                id: "OR-11",
                anchor: "or-dual-role",
                title: "Oregon legislators: dual-role officers and ORS 181A.250",
                audience: "Statutory controls on state officers who also serve on federal task forces: what authority governs their movement of information between federal and state systems, what audit exists on either side of that seam, and whether ORS 181A.250's limits on collecting and maintaining information about a citizen's views and associations absent a criminal nexus are enforced in practice. Grounded in the March 13, 2026 transfer documented in the PR27478 production.",
                startingPoints: [{ label: "ORS 181A.250", href: "https://www.oregonlegislature.gov/bills_laws/ors/ors181a.html" }],
                fields: ["Recipient / office", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
        ],
    },
    {
        id: "federal-legislative-channels",
        title: "Federal legislative channels",
        entries: [
            {
                id: "US-01",
                anchor: "us-delegation",
                title: "Oregon congressional delegation",
                audience: "Present the archive as a documented state-agency case raising questions about constitutional protection for civic participation, treatment of unpaid public volunteers, and escalation of public criticism into police involvement. Ask about relevant federal legislative or oversight channels.",
                startingPoints: [
                    { label: "U.S. House representatives", href: "https://www.house.gov/representatives/find-your-representative" },
                    { label: "Contact U.S. senators", href: "https://www.senate.gov/senators/senators-contact.htm" },
                ],
                fields: ["Office / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "US-02",
                anchor: "us-house-natural",
                title: "U.S. House Committee on Natural Resources",
                audience: "Volunteer protections and complaint/escalation safeguards in federal public-lands programs, using the Oregon case as source material for a comparative policy question. Its Federal Lands and Oversight and Investigations subcommittees concern federal lands and federal agencies, not direct oversight of Oregon State Parks.",
                startingPoints: [
                    { label: "House Natural Resources", href: "https://naturalresources.house.gov/" },
                    { label: "Jurisdiction", href: "https://naturalresources.house.gov/about/" },
                ],
                fields: ["Committee / subcommittee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
            {
                id: "US-03",
                anchor: "us-senate-energy",
                title: "U.S. Senate Committee on Energy and Natural Resources",
                audience: "Federal public-lands and National Park System volunteer policy: what standards govern dismissal, grievances, speech, and escalation involving unpaid volunteers?",
                startingPoints: [
                    { label: "Senate Energy and Natural Resources", href: "https://www.energy.senate.gov/" },
                    { label: "Jurisdiction", href: "https://www.energy.senate.gov/about/jurisdiction/" },
                ],
                fields: ["Committee / subcommittee / recipient", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                status: "Not contacted",
            },
        ],
    },
    {
        id: "federal-civil-rights-reporting",
        title: "Federal civil-rights reporting",
        entries: [
            {
                id: "US-04",
                anchor: "us-doj",
                title: "U.S. Department of Justice, Civil Rights Division",
                audience: "The documented sequence of public criticism, OPRD referral, police threat assessment, investigative coordination, and visit to the volunteer's home; submitted for review of possible deprivation of rights or retaliation under applicable federal law. The submission links the OSP email chain and the other primary police records.",
                startingPoints: [{ label: "Civil Rights Division intake", href: "https://civilrights.justice.gov/" }],
                fields: ["Report reference / recipient", "Date submitted", "Specific conduct identified", "Material and version sent", "Response received / date", "Follow-up / date"],
                status: "Not submitted",
            },
            {
                id: "US-05",
                anchor: "us-fbi",
                title: "FBI civil-rights reporting",
                audience: "Submit the same documented police-operation sequence for assessment of whether it falls within federal criminal civil-rights investigative jurisdiction.",
                startingPoints: [
                    { label: "FBI tips", href: "https://tips.fbi.gov/" },
                    { label: "Civil-rights information", href: "https://www.fbi.gov/investigate/civil-rights" },
                ],
                fields: ["Report reference / recipient", "Date submitted", "Specific conduct identified", "Material and version sent", "Response received / date", "Follow-up / date"],
                status: "Not submitted",
            },
            {
                id: "US-06",
                anchor: "us-eeoc",
                title: "U.S. Equal Employment Opportunity Commission",
                audience: "Federal employment protections for applicants to paid state employment when the park supervisor overseeing the volunteer assignment was also the hiring manager who received the application for the paid position.",
                startingPoints: [{ label: "EEOC charge process", href: "https://www.eeoc.gov/how-file-charge-employment-discrimination" }],
                fields: ["Charge reference / recipient", "Date submitted", "Specific conduct identified", "Material and version sent", "Response received / date", "Follow-up / date"],
                status: "Not submitted",
            },
            {
                id: "US-07",
                anchor: "us-task-force-transfer",
                title: "Senator Ron Wyden: federal task force resources in a state matter",
                audience: "Oversight of the March 13, 2026 transfer: a state detective serving as a Portland FBI JTTF task force officer distributed a citizen's name to FBI personnel, then moved a driver's record and a report from his FBI account into a state file he had declared in writing was not an FBI case, in a matter with no criminal predicate. What the FBI created and retains, and who audits the state-federal seam.",
                startingPoints: [{ label: "The March 13 transfer, in the production", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8/" }, { label: "Senator Wyden constituent services", href: "https://www.wyden.senate.gov/contact/" }],
                fields: ["Recipient / office", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                tracking: [
                    { label: "Recipients", value: "Senator Wyden whistleblower intake; FBI Portland media office; DOJ Office of the Inspector General hotline" },
                    { label: "Contact / submission route", value: "Email, with every named party and the accountability chain copied" },
                    { label: "Date sent", value: "September 23, 2026" },
                    { label: "Correspondence sent", value: "September 23, 2026 · Federal task force resources in a state matter with no criminal predicate", href: "/record/outreach/01M37K9WT8ZHPBH432JWXH3TYV/" },
                    { label: "Material and version sent", value: "", links: [
                        { label: "Letter to Senator Wyden", href: "/records/outreach/attachments/01m37k9wt8zhpbh432jwxh3tyv-2026-09-23-senator-wyden-task-force-transfer.pdf" },
                        { label: "The March 13 transfer", href: "/records/outreach/attachments/01m37k9wt8zhpbh432jwxh3tyv-2026-09-23-the-march-13-transfer.pdf" },
                        { label: "Testimony v1.10", href: "/records/outreach/attachments/01m37k9wt8zhpbh432jwxh3tyv-testimony-of-robert-samuel-white-v1-10.pdf" },
                    ] },
                    { label: "Specific request made", value: "Examine the March 13 transfer, what the FBI created and retains about him, and who audits dual-role officers across the state-federal seam." },
                    { label: "Response received / date", value: "September 23, 2026 · Forwarded to the appropriate staff for review", href: "/record/outreach/01M37MX2GGH83G886B89A9Y0H6/" },
                    { label: "Follow-up / date", value: "None" },
                ],
                dispatch: {
                    dateSent: "September 23, 2026",
                    material: "Letter · The March 13 transfer · Testimony v1.10",
                    correspondence: [
                        { label: "September 23, 2026 · Federal task force resources in a state matter with no criminal predicate", href: "/record/outreach/01M37K9WT8ZHPBH432JWXH3TYV/" },
                    ],
                },
                status: "Response received",
            },

            {
                id: "US-08",
                anchor: "us-doj-oig",
                title: "U.S. Department of Justice, Office of the Inspector General",
                audience: "Formal complaint on the March 13, 2026 transfer: the authority for a task force officer's use of FBI resources in a matter he declared in writing was not an FBI case, what the FBI created and retains, and federal-side supervision of dual-role officers.",
                startingPoints: [{ label: "DOJ OIG hotline", href: "https://oig.justice.gov/hotline" }],
                fields: ["Recipient / office", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                tracking: [
                    { label: "Recipient / office", value: "Investigations Division, Office of the Inspector General, U.S. Department of Justice" },
                    { label: "Contact / submission route", value: "Email to the OIG hotline, with the involved personnel and the accountability chain copied" },
                    { label: "Date sent", value: "September 23, 2026" },
                    { label: "Correspondence sent", value: "September 23, 2026 · Complaint to the Inspector General: the March 13 transfer", href: "/record/outreach/01M37MV4ZRW7F535J16WXD8TJ4/" },
                    { label: "Material and version sent", value: "", links: [
                        { label: "Complaint to the Inspector General", href: "/records/outreach/attachments/01m37mv4zrw7f535j16wxd8tj4-2026-09-23-doj-oig-complaint.pdf" },
                        { label: "The March 13 transfer", href: "/records/outreach/attachments/01m37mv4zrw7f535j16wxd8tj4-2026-09-23-the-march-13-transfer.pdf" },
                        { label: "Testimony v1.10", href: "/records/outreach/attachments/01m37mv4zrw7f535j16wxd8tj4-testimony-of-robert-samuel-white-v1-10.pdf" },
                    ] },
                    { label: "Specific request made", value: "Examine the authority for the March 13 transfer, what the FBI created and retains about him, and federal-side supervision of dual-role officers." },
                    { label: "Response received / date", value: "None received" },
                    { label: "Follow-up / date", value: "None" },
                ],
                dispatch: {
                    dateSent: "September 23, 2026",
                    material: "Complaint · The March 13 transfer · Testimony v1.10",
                    correspondence: [
                        { label: "September 23, 2026 · Complaint to the Inspector General: the March 13 transfer", href: "/record/outreach/01M37MV4ZRW7F535J16WXD8TJ4/" },
                    ],
                },
                status: "Sent · Awaiting response",
            },
            {
                id: "US-09",
                anchor: "us-fbi-complaint",
                title: "FBI Portland Field Office: the conduct of a task force officer",
                audience: "Complaint to the Special Agent in Charge about one man abusing the power and resources available to him: a JTTF task force officer who used FBI accounts, personnel, and data in a matter he stated in writing was not an FBI case. He is asked to be investigated.",
                startingPoints: [{ label: "FBI Portland Field Office", href: "https://www.fbi.gov/contact-us/field-offices/portland" }, { label: "tips.fbi.gov", href: "https://tips.fbi.gov" }],
                fields: ["Recipient / office", "Contact / submission route", "Date sent", "Material and version sent", "Specific request made", "Response received / date", "Follow-up / date"],
                tracking: [
                    { label: "Recipient / office", value: "Special Agent in Charge, FBI Portland Field Office" },
                    { label: "Contact / submission route", value: "Email to the Portland field office, with the involved personnel and the accountability chain copied" },
                    { label: "Date sent", value: "September 23, 2026" },
                    { label: "Correspondence sent", value: "September 23, 2026 · Complaint to the FBI: the conduct of Task Force Officer Jake Hyde", href: "/record/outreach/01M382W278SJK9CDV86VW0PM2A/" },
                    { label: "Material and version sent", value: "", links: [
                        { label: "Complaint: Task Force Officer Jake Hyde", href: "/records/outreach/attachments/01m382w278sjk9cdv86vw0pm2a-2026-09-23-fbi-complaint-hyde.pdf" },
                        { label: "Testimony v1.10", href: "/records/outreach/attachments/01m382w278sjk9cdv86vw0pm2a-testimony-of-robert-samuel-white-v1-10.pdf" },
                    ] },
                    { label: "Specific request made", value: "Investigate Hyde: the authority for each use of FBI accounts, personnel, and databases; what the FBI created and retains; and the supervision of a task force officer moving information between FBI and state systems." },
                    { label: "Response received / date", value: "None received" },
                    { label: "Follow-up / date", value: "None" },
                ],
                dispatch: {
                    dateSent: "September 23, 2026",
                    material: "Complaint · Testimony v1.10",
                    correspondence: [
                        { label: "September 23, 2026 · Complaint to the FBI: the conduct of Task Force Officer Jake Hyde", href: "/record/outreach/01M382W278SJK9CDV86VW0PM2A/" },
                    ],
                },
                status: "Sent · Awaiting response",
            },
        ],
    },
];

export const OTHER_AUDIENCES = [
    {
        title: "Researchers / academic programs",
        audience: "A primary-source case study in volunteer governance, institutional recordkeeping, public accountability, and how a longitudinal archive makes institutional actions legible.",
        fields: ["Institution / researcher", "Contact", "Date sent", "Material and version sent", "Response received / date", "Follow-up / date"],
    },
    {
        title: "Journalists / public-interest reporting",
        audience: "The chronology, OSP production, correspondence, and direct access to primary records for independent reporting; with Robert Samuel White's testimony distinguished from institutional records.",
        fields: ["Outlet / journalist", "Contact", "Date sent", "Material and version sent", "Response received / date", "Follow-up / date"],
    },
    {
        title: "Volunteer associations / prospective volunteers",
        audience: "The archive as a resource for understanding procedural protections and gaps before undertaking unpaid service in public institutions.",
        fields: ["Organization / recipient", "Contact", "Date sent", "Material and version sent", "Response received / date", "Follow-up / date"],
    },
];

export const OUTREACH_SOURCES: OutreachLink[] = [
    { label: "Oregon LPRO: committee services", href: "https://www.oregonlegislature.gov/lpro/Pages/committee-services.aspx" },
    { label: "Oregon LPRO home", href: "https://www.oregonlegislature.gov/lpro/" },
    { label: "Joint Legislative Audits, June 17, 2026 meeting materials", href: "https://olis.oregonlegislature.gov/liz/2025I1/Committees/JLAUD/2026-06-17-12-30/MeetingMaterials" },
    { label: "Oregon Secretary of State: Audits", href: "https://sos.oregon.gov/audits/Pages/default.aspx" },
    { label: "Government Waste Hotline", href: "https://sos.oregon.gov/audits/pages/accountability.aspx" },
    { label: "Oregon BOLI: civil-rights complaints", href: "https://www.oregon.gov/boli/civil-rights/Pages/complaints.aspx" },
    { label: "U.S. House Natural Resources: about / subcommittees", href: "https://naturalresources.house.gov/about/" },
    { label: "U.S. Senate Energy and Natural Resources: jurisdiction", href: "https://www.energy.senate.gov/about/jurisdiction/" },
    { label: "EEOC: charge process", href: "https://www.eeoc.gov/how-file-charge-employment-discrimination" },
];
