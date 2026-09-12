export interface SunlightBlock {
    t: "says" | "record" | "p" | "links";
    md: string;
}

export interface SunlightSection {
    heading: string;
    blocks: SunlightBlock[];
}

// The document's answer, entry by entry — generated from the redacted
// response of September 11, 2026. The prose is the published document;
// links carry their original targets, including ?t= seeks into the tapes.
export const SUNLIGHT_INTRO: string[] = [
    "Here is what Oregon State Parks did to me at Honeyman State Park.",
    "I volunteered. I put my concerns in writing, because writing is how I communicate. The park's staff decided the writing was the problem. They called me to a picnic table and spent an hour pressuring me to resign. I did not resign. So the park manager dismissed me by phone, and the program manager then spent ten months building the document reproduced at the end of this record. It takes every ordinary thing I did and recasts it as a pattern, to justify a decision that had already been made. Then it was handed to the police.",
    "I kept my own record the entire time. Every email, sent and received. Two recordings. All of it contemporaneous, all of it published, every item at a permanent address. That record is why the document does not survive contact with the facts.",
    "What follows is the document, bullet by bullet. Its words first, in quotation marks, exactly as written. Then the record, with the links to prove it."
];

export const SUNLIGHT_SECTIONS: SunlightSection[] = [
    {
        "heading": "January 2025 \u2014 Tugman",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger [Tugman Volunteer Services Lead] discusses with Sam that he has been sending to many texts and emails to staff.\""
            },
            {
                "t": "record",
                "md": "This is the document's first entry. It is about Tugman, a month before Honeyman, and Tugman is not named again anywhere in the document. Placed first, it supplies the appearance of a pattern before the document reaches Honeyman.\n\nLook at how [Tugman Volunteer Services Lead] actually wrote to me. [\"Excellent! Congrats!\"](https://oprdvolunteerabuse.org/accountability/oprd/01JKC93XJ05B7ZFFY3MS9AV43A/) and [\"I am not surprised. I think you'll have a good time there.\"](https://oprdvolunteerabuse.org/accountability/oprd/01JMMXCP10R37WHGGVDPZ07ZQ3/)\n\n[On the morning of March 24, 2025, hours before Honeyman dismissed me, she wrote to me about my next assignment](https://oprdvolunteerabuse.org/accountability/oprd/01JQ4D8830BX5NSFR9688G7DVB/): last-minute cancellations had moved my April relief-greeter placement from Umpqua to Tugman, and she asked whether to switch my September assignment as well. [I answered that morning](https://oprdvolunteerabuse.org/accountability/oprd/01JQ4J1GCGYPQ669RHG3WCHFT4/): \"Actually let's keep September the same too. Tugman feels like home. See you next week!\" The park manager called me that afternoon.\n\nAnd when she learned I had been dismissed from Honeyman, [her last letter to me](https://oprdvolunteerabuse.org/accountability/oprd/01JQ75M860BH848CACWBGP8FDX/): \"I'm really sorry to hear that! I know you were really looking forward to hosting there so it's a shame it didn't work out. We can talk about it when you get here if you want. Take it easy this week!\" That is not how someone writes to a person whose communication was a problem."
            },
            {
                "t": "p",
                "md": "*One observation. [Tugman Volunteer Services Lead] coordinated volunteers for her park when this began. Directly after all of this, she was demoted to a regular ranger. The one person in this record who treated me with plain decency is the one who lost standing.*"
            }
        ]
    },
    {
        "heading": "02/09/25 \u2014 the power outage",
        "blocks": [
            {
                "t": "says",
                "md": "\"Power goes out at 3 a.m. Sam texts ranger supervisor at 6 a.m who responds via text. Sam sends email to Ranger Supervisor [Park Supervisor] wanting additional clarification who to contact during emergencies. [Park Supervisor] Responds later by email. Sam then emails Ranger Supervisor [Park Supervisor] and Ranger [Volunteer Services Lead] expressing [Park Supervisor] made him feel small/not appreciated in her texts.\""
            },
            {
                "t": "record",
                "md": "False. I texted the supervisor at 6 a.m. and she answered by text. She did not answer an email, because no email existed yet.\n\nI documented it. [I emailed her](https://oprdvolunteerabuse.org/accountability/oprd/01JKMXJCF8D4M3JQHEH9G94SBP/), and [I emailed the volunteer services lead](https://oprdvolunteerabuse.org/accountability/oprd/01JKMXKQE8BSX3BFPWVAK1PXRZ/). Only then did she write to me. [She apologized](https://oprdvolunteerabuse.org/accountability/oprd/01JKRMYTC8KZCWWMCGCWFZH2MA/), \"that was absolutely not my intent,\" and gave me the written protocols [I thanked her for](https://oprdvolunteerabuse.org/accountability/oprd/01JKRNVP6RQ12HQYQJ8A35C50J/).\n\nThe document reverses that order. In its sequence she answers me and I write again to say she made me feel small. In the record my email is what produced her apology. The reversal turns documentation into a complaint about a matter already handled."
            }
        ]
    },
    {
        "heading": "02/10/25 \u2014 the call",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam calls park manager trying to get ahold of the rangers.\""
            },
            {
                "t": "record",
                "md": "True. A guest needed an answer and I called down the escalation chart, the rangers first, the park manager last. He did not answer.\n\nI described this call at the picnic table a month later, as my example of Patrick’s condescension: a guest situation I had to escalate, where I called everyone including him, and when he arrived he recited the entire call log back to me ([10:36](https://oprdvolunteerabuse.org/evidence/coercion/?t=10:36))."
            }
        ]
    },
    {
        "heading": "02/11/25 \u2014 the visit",
        "blocks": [
            {
                "t": "says",
                "md": "\"Park Manager [Park Manager] stops by welcome center to talk with Sam and ensure he is up to speed on things, including after hours communication and expectations. Additionally, [Park Manager] asks Sam to stop writing poems, drawing in the red book and to only include relevant work information in this book.\""
            },
            {
                "t": "record",
                "md": "False. He came, and nothing the entry gives as the reason is true.\n\n[The next morning I put in writing, to all three of them, what this was](https://oprdvolunteerabuse.org/accountability/oprd/01JKXC1M80V9A90EV4SX6BFJ35/): \"the volunteer asserted a boundary as softly as he could and he felt it was respected and was already moving on, but the system saw it differently, and a park manager showed up at the start of his shift, without his direct supervisor for support, and this created a whole new situation.\"\n\nThe red book: I raised it myself. I showed him the book and asked. I stopped the doodles that day, and said so at the picnic table weeks later ([35:30](https://oprdvolunteerabuse.org/evidence/coercion/?t=35:30)). I photographed every page of that book. There are no poems in it. There are notes between staff and volunteers wishing each other a good day. I have the photographs."
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 dissatisfaction",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam expresses dissatisfaction with park manager stopping by, as well as with Rangers [Park Supervisor] and [Volunteer Services Lead]. Park manager e-mails back with Sam.\""
            },
            {
                "t": "record",
                "md": "False. I expressed no dissatisfaction. That is a characterization. The email is quoted above, and it asked for a reset: \"I will conform. I will recalibrate. I will be a model volunteer.\" [The park manager agreed](https://oprdvolunteerabuse.org/accountability/oprd/01JKXHEPAR0PEQMPJXJGG9GZJ4/): \"A reset sounds good to me.\"\n\n[I forwarded it to the program manager on December 19, 2025](https://oprdvolunteerabuse.org/accountability/oprd/01KCW58AYR8F09QY561CPNAY9F/)."
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 the reset meeting",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger [Volunteer Services Lead] and Ranger Supervisor [Park Supervisor] had an 'informal' meeting with Sam, at a picnic table at Sand Dunes day use area so that [Park Supervisor] could talk with Sam in person, apologize for the text communication making him feel small and explain the intent. The meeting went well and Sam said all was good when they ended the conversation.\""
            },
            {
                "t": "record",
                "md": "True. I believed the reset was real. [I applied for a job at Honeyman that night.](https://oprdvolunteerabuse.org/accountability/oprd/01JKYSTM48Y0QK5CM8QSD0QC6X/)"
            }
        ]
    },
    {
        "heading": "02/12/25 \u2014 the fabricated quotation",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam reached out to Ranger [Volunteer Services Lead] to discuss his withdrawal of an application to become a PRA with OPRD. During conversation Sam begins to tell [Volunteer Services Lead] that he believes the world is going to end and that’s one of the reasons he came to Honeyman. He also brings up that Ranger Leaf was beginning to act “disingenuine.”\n\nRanger [Volunteer Services Lead] clarifies that texting rangers he is bored during volunteer shifts is not the communication work phones should be used for, and rangers will respond professionally to any texts they receive.\n\nSam returns conversation to sharing his views on the end of the world, and tells Ranger [Volunteer Services Lead], “When it all goes, someone like me is going to be the first one to die…and THEY are going to use YOU to do it!”\n\nRanger [Volunteer Services Lead] returned the conversation to professional communications and use of text and email communications, to which Sam replied, “That’s just who I am.”\""
            },
            {
                "t": "record",
                "md": "False, and the date is impossible. [I applied for the position the night of February 12.](https://oprdvolunteerabuse.org/accountability/oprd/01JKYSTM48Y0QK5CM8QSD0QC6X/) [I did not withdraw it until February 16.](https://oprdvolunteerabuse.org/accountability/oprd/01JM9193N021MEHRXWSR30NWT5/) The first time I raised the withdrawal with the volunteer services lead was February 19, when [I emailed him](https://oprdvolunteerabuse.org/accountability/oprd/01JMFWR8VREQS149ZWH8ENVVM3/): \"could you stop by my campsite? There’s something I’d like to talk to you about. I will tell you why I withdrew my application.\"\n\nI asked him because of the night before. He came to the welcome center and spent ninety minutes on himself. [I named the exchange to him later](https://oprdvolunteerabuse.org/accountability/oprd/01KC32EJP8NEFBWH0YGJKV3A4S/): \"You elicited trust through reciprocal vulnerability. You spent 90 minutes talking about yourself—your background, your concerns, your perspectives. The following day, I reciprocated. That is how trust-building works.\"\n\nBecause of that night, before the walk, I told him explicitly that our relationship was not romantic. [I did this because I have had to navigate the distortions of straight men my entire life.](https://oprdvolunteerabuse.org/accountability/oprd/01KQV3VJPGP9RDYAQZ3HZVXEYF/)\n\nOn the walk I told him why I was there. [What he did with that](https://oprdvolunteerabuse.org/accountability/oprd/01JNBNSRN04NEM4MEZJG40Q3N5/): \"When I finally opened up to you about why I’m here, what I sacrificed to be here, and why this matters to me, you responded by trying to manage my perception instead of actually listening.\" [What I actually said](https://oprdvolunteerabuse.org/accountability/oprd/01KC32EJP8NEFBWH0YGJKV3A4S/): \"in authoritarian contexts, people like you—institutional actors with authority—would be the mechanism through which targeting of queer people would occur.\"\n\nHe took a private disclosure from a queer volunteer under his authority and turned it into a fabricated psychological profile used to justify my removal. [I named it to him](https://oprdvolunteerabuse.org/accountability/oprd/01KC32EJP8NEFBWH0YGJKV3A4S/): \"You took what I shared in confidence and disclosed it to management. That information was then weaponized by [Program Manager] to pathologize my character during dismissal proceedings.\"\n\nI refuted it to the program manager on the recorded March 25 call: \"I have never said the world is ending. What I see is instability in our system\" ([8:54](https://oprdvolunteerabuse.org/evidence/expulsion/?t=8:54)). That night [I wrote to her about the welcome center](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/): \"Logan’s behavior, including doing stretches in front of me during a long shift at the Welcome Center, created discomfort and blurred boundaries.\"\n\nThe program manager kept the fabricated quotation in this document for another ten months, and it went to the Oregon State Police."
            }
        ]
    },
    {
        "heading": "02/15/25 and 02/16/25 \u2014 the withdrawal",
        "blocks": [
            {
                "t": "says",
                "md": "\"[Park Supervisor] and [Volunteer Services Lead] working at welcome center on fence. Ranger Supervisor asks Sam what his plans for the summer are.\" And: \"Sam later withdraws his PRA application and makes this known because Supervisor [Park Supervisor] asked what his plans were for the summer.\""
            },
            {
                "t": "record",
                "md": "Partly true. The conversation happened. [Park Supervisor] was the hiring manager for seasonal staff. My application for a summer position at Honeyman had gone [directly to her](https://oprdvolunteerabuse.org/accountability/oprd/01JKYWWYKR8F67JQGVNF5V44WP/); the cover letter opens, \"I recognize this might not be the application you expected to land on your desk,\" and it closes: \"it was our conversation by the lake that made me believe this was worth pursuing.\"\n\nThe park supervisor invited me outside to talk with them and asked what my plans for the summer were, with no mention of the application. Not knowing whether she had seen it, I answered that hopefully I would be here. She pointed at me, which told me she knew.\n\nShe asked, \"What do you want, a job?\" So I told her why I was volunteering: to gain the experience to become a park ranger. [I have written it since](https://oprdvolunteerabuse.org/accountability/oprd/01KQV3VJPGP9RDYAQZ3HZVXEYF/): \"I was exploring a path toward becoming a park ranger — I wanted the second half of my life to be spent in service of something I believed in.\" She closed up immediately, looked away, and stayed silent for minutes while I went on answering the question she had asked me. When nothing came back, I stopped talking and went back inside.\n\n[On the evening of February 16 I withdrew the application](https://oprdvolunteerabuse.org/accountability/oprd/01JM9193N021MEHRXWSR30NWT5/) and told the volunteer services lead: \"It’s not something I want to discuss, but I wanted you to hear it from me directly. I am legitimately putting this to rest.\" I gave no reason, and I said nothing to her.\n\nAt the picnic table I told the park manager I had put the February 12 escalation so far behind me that I applied for a job there ([45:23](https://oprdvolunteerabuse.org/evidence/coercion/?t=45:23)). He said my understanding was that the park supervisor \"purposely asked you what your plans were because she knew that you applied for the job,\" and called it \"absolutely false… the most false thing I've ever heard, ever\" ([46:01](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:01)).\n\nI told him it was not what I said. He said it came across that way, in my emails and my texts. I answered: \"I've never said anything like that. It's not in any email or text\" ([46:15](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:15)). He said, \"I'm letting you know that's how it was received.\" I asked, \"From where? What are you talking about?\" ([46:23](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:23))\n\nHe said, \"[Park Supervisor] could talk about it probably\" ([46:29](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:29)). The park supervisor then spoke for only the second time in forty-six minutes: \"I interpreted that… something that I said to you in that interaction, you decided to [rescind] your application because I asked you maybe what you were doing for the summer\" ([46:32](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:32)).\n\nI paused and thought about it. Then I spoke, soft and conciliatory, and I de-escalated: \"I mean, [Park Supervisor], I didn't provide a reason in that email, first of all. And I never made it an issue with you. Right?\" She said, \"Yeah\" ([46:58](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:58)).\n\nTwo minutes later I turned back to her and said I had completely let that go, and, \"I like you.\" She said, \"Okay\" ([48:37](https://oprdvolunteerabuse.org/evidence/coercion/?t=48:37))."
            }
        ]
    },
    {
        "heading": "02/19/25 \u2014 \"heavy things\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email expressing that he has been having trouble sleeping and that he is dealing with 'some pretty heavy things right now and I haven't processed them all' and that [Volunteer Services Lead] may have noticed.\""
            },
            {
                "t": "record",
                "md": "False. That email asks the volunteer services lead to find someone else to lock the dune-access gate at night, because the hours were costing me sleep. The entry quotes the one personal sentence in it and deletes the request, the reason for it, and the answer it got the same day. On February 1, my first day at the park, [I volunteered to open and close the dune-access gate](https://oprdvolunteerabuse.org/accountability/oprd/01JK2KXMC0WRNWKNS57C1NWGZ0/), unpaid, \"Even on my days off.\" That meant 7 a.m. and 10 p.m., every day.\n\nTwo and a half weeks in it was costing me sleep, and [I asked for someone else to take the night close](https://oprdvolunteerabuse.org/accountability/oprd/01JMFB5TT8WYADV2FKJZEXC9AZ/) and kept the morning open. [His answer that same day](https://oprdvolunteerabuse.org/accountability/oprd/01JMG1XWNGPJZ1Z2JS08T2TGDT/) was to split the gate \"between two people so that you don't feel so boxed in with the hours.\"\n\nThe same morning, when the person covering my day off forgot the gate, [I handled it myself, \"so they don't feel called out.\"](https://oprdvolunteerabuse.org/accountability/oprd/01JMFBX010S39S8XW9EZQQC8GF/) That afternoon [I agreed to close the gate on the other closers' days off](https://oprdvolunteerabuse.org/accountability/oprd/01JMG2NFHR1H360GDY8WDQSK69/)."
            }
        ]
    },
    {
        "heading": "02/25/25 \u2014 the piercing email",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email telling him to check out his new video as it shows off his new piercing. Sam claims the email was meant for someone else.\""
            },
            {
                "t": "record",
                "md": "True, and [I corrected it within hours on my own](https://oprdvolunteerabuse.org/accountability/oprd/01JMYAV0MR16ZWGVW9HM44HT59/): \"Sorry, that was meant for a friend. Please disregard.\""
            }
        ]
    },
    {
        "heading": "02/26/25 \u2014 Patrick",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam emails Ranger [Volunteer Services Lead] to express concern with working with Ranger Patrick.\""
            },
            {
                "t": "record",
                "md": "False. I named no one. [I asked](https://oprdvolunteerabuse.org/accountability/oprd/01JN0Q6H10990Z8DBSZ1E25HT7/) whether I would be training with \"a certain ranger here who is consistently patronizing toward me every time we interact,\" and closed: \"This isn’t an issue unless I hear otherwise, so no need to escalate\u2014just wanted to clarify.\"\n\nOn the March 5 tape I say Patrick was very polite ([8:13](https://oprdvolunteerabuse.org/evidence/coercion/?t=8:13)), that I had no issue with him and navigated him easily ([6:59](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:59)), that I navigate him like I do everybody ([9:12](https://oprdvolunteerabuse.org/evidence/coercion/?t=9:12)), and that he is just being himself ([27:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=27:33)). I never had a conflict with Patrick."
            }
        ]
    },
    {
        "heading": "02/27/25 \u2014 the poem",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] a poem asking for feedback.\""
            },
            {
                "t": "record",
                "md": "False. [I sent a poem about the coast](https://oprdvolunteerabuse.org/accountability/oprd/01JN5AXYC0SD3DEBEQ8TYBCQ99/) to the coordinator I was asking to help me find placements at other parks, so he would understand why the coast mattered to me. I sent the same poem to [Tugman Volunteer Services Lead], for the same reason.\n\nThe park manager raised it at the picnic table on March 5. I offered to explain it. He said he did not need an explanation ([37:41](https://oprdvolunteerabuse.org/evidence/coercion/?t=37:41)). I asked whether I could explain it anyway, and he said if I wanted to ([37:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=37:52)). Then I explained: I loved the welcome center, I was trying to find the same role at other coastal parks, I had asked the volunteer services lead to contact those parks for me, and \"that poem is about what brought me here\" ([38:22](https://oprdvolunteerabuse.org/evidence/coercion/?t=38:22)).\n\nTwenty days later the program manager repeated the same framing on the recorded call: \"the email where you sent a poem to [the volunteer services lead] for him to review\" ([11:19](https://oprdvolunteerabuse.org/evidence/expulsion/?t=11:19)). I told her the poem was context for a request: \"I shared that poem with him because I was hoping he would help me… I was trying to find different host positions working in welcome centers along the coast, and I just wanted him to understand how much it meant to me to be on the coast, and that was it. I don’t know why that felt so inappropriate. It’s just a poem\" ([12:39](https://oprdvolunteerabuse.org/evidence/expulsion/?t=12:39))."
            }
        ]
    },
    {
        "heading": "02/28/25 \u2014 \"friends\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends Ranger [Volunteer Services Lead] an email asking him to leave him a positive performance review, for help finding volunteer assignments elsewhere on the coast, and to return to Honeyman next year. He also shares that he thought Ranger [Volunteer Services Lead] and Sam could be friends, but he now understood 'That's not the case.'\""
            },
            {
                "t": "record",
                "md": "[True.](https://oprdvolunteerabuse.org/accountability/oprd/01JN7XVHD89PACJKYM3JMKTYFW/) It was my last day at the welcome center: \"I had a very good day. I helped a lot of people, and I'm going to miss the welcome center.\" Three requests: a strong review, help finding the same role at other coastal parks, consideration for a return next year.\n\nI had not seen the volunteer services lead once in the nine days since the walk on February 19. I did not know then what he had done with what I told him on it. I wrote that letter to close the personal question myself and keep the working relationship.\n\nAnd the document stops quoting one sentence early. [The letter continues](https://oprdvolunteerabuse.org/accountability/oprd/01JN7XVHD89PACJKYM3JMKTYFW/): \"I accept this. What I do know is that I bring value \u2014 to this park, to this system, to the people I serve. I trust that you will advocate for me in a professional capacity.\""
            }
        ]
    },
    {
        "heading": "03/01/25 \u2014 Patrick again",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends an email to Ranger [Volunteer Services Lead] expressing dissatisfaction with Ranger Patrick... Sam did not want to attend a training led by Ranger Patrick. Staff arranged to have an additional Ranger, Ranger Leaf, present at the training with Sam and Patrick. Sam was still dissatisfied with having to work with Patrick.\""
            },
            {
                "t": "record",
                "md": "False. Nothing was arranged by staff. The volunteer services lead had promised me Leaf would train me. That morning I texted Leaf, and he knew nothing about it. I said I would not go until I talked to the volunteer services lead. Leaf himself offered to attend alongside Patrick and asked whether that worked. I said yes, and I went to the training. On the tape the park manager acknowledges I attended with no issue ([6:38](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:38)), and I say I went and did the training ([29:08](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:08)).\n\nWhat I wrote that evening reported what happened at the training, and it is the thing I had tried to prevent. I asked Patrick whether I could work twelve to four. He told me twice not to get my hopes up, then spent the next hour repeating that rangers are there to help. [My first email](https://oprdvolunteerabuse.org/accountability/oprd/01JNAHNHM85XV15M7438MYXR5A/) asked the volunteer services lead to confirm the deadline. [My second](https://oprdvolunteerabuse.org/accountability/oprd/01JNAM0E3RRXDZ8TX45JFQ708D/) reported the rest: \"After I asked Patrick about scheduling, the conversation spiraled into him repeatedly telling me that rangers are here to help… This is the pattern I'm talking about.\"\n\n[My third](https://oprdvolunteerabuse.org/accountability/oprd/01JNAP0748259QVFXDPCDREPQ6/) set out what I had already done to avoid it: \"I was proactive about this, even this morning, trying to ensure Leaf would be the one who trained me because I knew to expect this behavior from Patrick. I told you about it. I tried to avoid any written communication about it.\""
            }
        ]
    },
    {
        "heading": "03/02/25 \u2014 the \"trust\" email",
        "blocks": [
            {
                "t": "says",
                "md": "that I said I no longer trusted [Volunteer Services Lead], and quotes only: \"You will ensure that my contributions are recognized appropriately in your system. I will not allow the dysfunction here to interfere with my larger trajectory. If there is any pushback on this, understand that I am fully prepared for it.\""
            },
            {
                "t": "record",
                "md": "True. I wrote that I did not trust him. The document quotes four sentences from the end of that email and nothing else from it. It is selectively quoted documentation, repurposed as a pretext.\n\n[The email](https://oprdvolunteerabuse.org/accountability/oprd/01JNBNSRN04NEM4MEZJG40Q3N5/) itemizes what the volunteer services lead had done. \"When I confided in you about the situation with [Park Supervisor], you escalated it instead of protecting me. Then you disappeared.\" \"The moment I withdrew my application, you reappeared—spending ninety minutes talking about yourself.\" \"When I finally opened up to you about why I'm here, what I sacrificed to be here, and why this matters to me, you responded by trying to manage my perception instead of actually listening.\" \"You assured me Leaf would train me. That didn't happen.\"\n\nThe four lines are about my record. My contributions are entered in the state's system by the volunteer services lead, and that record follows a volunteer to every other park and into any application for paid work. That is why the next line is about my trajectory, and why I said I was prepared for pushback: the person I had just documented was the person who writes it. I wrote them to protect myself, and [I forwarded the email to the park supervisor myself, the same morning](https://oprdvolunteerabuse.org/accountability/oprd/01JNBTPJ7GF0TJTD01ZVGVSPBG/): \"I am not escalating. I am informing.\""
            }
        ]
    },
    {
        "heading": "03/05/25 \u2014 the meeting",
        "blocks": [
            {
                "t": "says",
                "md": "that [Park Manager] and [Park Supervisor] met with me \"to set clear expectations for behavior and actions needed from Sam to continue being a park host.\""
            },
            {
                "t": "record",
                "md": "False. It was not expectation-setting. It was pretext-setting, and all sixty-two minutes of it are recorded, public for over a year, with transcript, chapters, and analysis:"
            },
            {
                "t": "links",
                "md": "- [The recording, with transcript and analysis](https://rswfire.com/library/signal/01JNK2TKG01JTERAMB7J6AKPK1)\n- [The chaptered record, in the archive](https://oprdvolunteerabuse.org/evidence/coercion/)"
            },
            {
                "t": "p",
                "md": "The park manager opened with praise: I was doing a great job at the welcome center ([0:00](https://oprdvolunteerabuse.org/evidence/coercion/?t=0:00)). Then he read from a list of talking points, a single piece of paper in front of him ([2:53](https://oprdvolunteerabuse.org/evidence/coercion/?t=2:53)). When I disagreed, he said \"You don't have to agree with it\" ([4:39](https://oprdvolunteerabuse.org/evidence/coercion/?t=4:39)), and \"this isn't an argument,\" twice ([6:26](https://oprdvolunteerabuse.org/evidence/coercion/?t=6:26)).\n\nNine minutes went to Patrick, a ranger I called very polite ([8:13](https://oprdvolunteerabuse.org/evidence/coercion/?t=8:13)); at the end of them he said, \"So I understand you have a conflict with Patrick\" ([9:12](https://oprdvolunteerabuse.org/evidence/coercion/?t=9:12)). His example of tone was the difference between introducing yourself politely and telling a camper to \"shut the fuck up\" ([12:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=12:52)).\n\nHe told me the emails were not the issue, that communication was healthy; I asked, \"Do you really mean this?\" and he said he did ([15:20](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:20)). He claimed my emails contained words they do not contain; I told him they were not in there; he said \"fair enough\" and moved on. He had no emails at that table. He had a handwritten piece of paper ([15:45](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:45)).\n\nThe supervisor spoke for the first time in nineteen minutes. One word: \"Tone\" ([18:59](https://oprdvolunteerabuse.org/evidence/coercion/?t=18:59)). He instructed me to have only conversations that do not result in threats or demands ([21:15](https://oprdvolunteerabuse.org/evidence/coercion/?t=21:15)), and quoted demands I never wrote; I denied them and he could not produce them ([21:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=21:31)). He reminded me of his fifteen years in the agency, the disciplinary processes, HR ([22:40](https://oprdvolunteerabuse.org/evidence/coercion/?t=22:40)). Then he told me to chew glass and swallow it ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17)).\n\nHe told me to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16)). Thirty minutes in, and for the first time, he told me the volunteer services lead had no supervisory authority, and: \"If we do dismissal \u2014 it's not the volunteer services lead doing a dismissal. It's the park supervisor or myself\" ([29:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:52)). He raised the poem and said he did not need an explanation ([36:20](https://oprdvolunteerabuse.org/evidence/coercion/?t=36:20)).\n\nHe counted my first week, one day and one text message, as two incidents, and called it a pattern ([44:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:42)). He described a claim I never made about the supervisor and called it \"the most false thing I've ever heard\"; I told him I never said it, and he answered, \"that's how it was received\" ([45:30](https://oprdvolunteerabuse.org/evidence/coercion/?t=45:30)). The supervisor then confirmed the interpretation was hers ([46:29](https://oprdvolunteerabuse.org/evidence/coercion/?t=46:29)).\n\nWhen I said I was not being given the benefit of the doubt, he answered, \"I may not be able to help you with that\" ([50:10](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:10)). When I asked for examples of the pattern, he said he had provided them ([52:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=52:42)). In the final two minutes he told me four times I did not have to stay ([59:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:31))."
            },
            {
                "t": "says",
                "md": "\"when [Park Manager] stated he does not trust Ranger [Volunteer Services Lead] \u2014 Sam would act like he never said that and has no recollection of saying that. When presented information and an explanation he would express that he in fact does not trust Ranger [Volunteer Services Lead].\""
            },
            {
                "t": "record",
                "md": "False. Nineteen minutes in, I stopped him: \"Let's get to the real issue here.\" I did not trust the volunteer services lead. He had given me no reason to trust him. I laid out why ([19:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=19:17)): he told me another ranger would train me, and that did not happen ([7:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=7:33)).\n\nWhen the park manager claimed I had written things I had not, I told him it was not in the emails, and he said \"fair enough\" and moved on because he could not produce them ([15:45](https://oprdvolunteerabuse.org/evidence/coercion/?t=15:45)). The contradiction it describes did not occur."
            },
            {
                "t": "says",
                "md": "\"Sam stated that he does not understand that words have implied meaning... When presented an example of a correspondence he sent that BOLDED specific words he said he did that 'to get his point across.' Disproving his prior point.\""
            },
            {
                "t": "record",
                "md": "False. I bolded words to emphasize them. That is what bold text is for, and I told him so at the table: it was the only time I had ever bolded anything in an email, and I did it to make a point ([20:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=20:17), [20:49](https://oprdvolunteerabuse.org/evidence/coercion/?t=20:49)).\n\nTwo minutes before the bolding came up, I had told him how I write: \"I am a very direct person. I mean what I say… you do not have to be reading subtext for me. I mean what I say,\" and that when language of mine gets misinterpreted it is because people attach meanings to words that I do not ([18:05](https://oprdvolunteerabuse.org/evidence/coercion/?t=18:05)). He answered that there are inferences and inflections in certain words, and gave bolding as his example ([19:00](https://oprdvolunteerabuse.org/evidence/coercion/?t=19:00)).\n\nTheir evidence that I do not understand implied meaning is bold text, and their measure of what bold text conveys is twenty-five exclamation points ([19:23](https://oprdvolunteerabuse.org/evidence/coercion/?t=19:23))."
            },
            {
                "t": "says",
                "md": "\"Sam was informed that he does not get to direct which staff members he will or will not work with.\""
            },
            {
                "t": "record",
                "md": "False. Nothing in the recording corroborates this statement. No one said it to me at that table, and I never said or implied otherwise."
            },
            {
                "t": "says",
                "md": "\"When presented our goal to assume positive intent until proven otherwise, Sam said he felt we were not assuming positive intent with him, but when given examples of why the meaning of his words indicated differently he was disproved of his original viewpoint and was given specific examples of times he proved us otherwise.\""
            },
            {
                "t": "record",
                "md": "False. When the park manager laid out the rule, \"assume positive intent until proven otherwise\" ([26:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=26:31)), I told him that was already my default position with people in general ([27:07](https://oprdvolunteerabuse.org/evidence/coercion/?t=27:07)).\n\nHe returned to it, asking me to take them at their word and let the trust issue with the volunteer services lead go ([32:41](https://oprdvolunteerabuse.org/evidence/coercion/?t=32:41)).\n\nWhen I said the rule was not running in my direction, \"I'm not getting that benefit of the doubt\" ([50:32](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:32)), he answered, \"I may not be able to help you with that\" ([50:39](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:39)).\n\nHe then said there was no positive intent from my side ([51:09](https://oprdvolunteerabuse.org/evidence/coercion/?t=51:09)), and that I had been proven otherwise since the first of the month ([52:32](https://oprdvolunteerabuse.org/evidence/coercion/?t=52:32))."
            },
            {
                "t": "says",
                "md": "\"Sam stated that he just wants to finish out the time here and move on. That he does not see a future here... Manager [Park Manager] reminded him that he is not required to stay... he is free to go.\""
            },
            {
                "t": "record",
                "md": "False. I told him I had genuinely wanted a future at Honeyman and no longer believed it was possible, after an hour of what that meeting was ([57:57](https://oprdvolunteerabuse.org/evidence/coercion/?t=57:57)).\n\nHe did not say I was free to go. In the last three minutes he told me four times that I was not obligated to stay. He said it in the low, rehearsed cadence of a manager running a managed exit, the script that produces a resignation instead of a dismissal: \"you don't have to feel obligated to stay\" ([59:32](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:32)); \"I would never expect you or want you to stay in a situation like that\" ([59:50](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:50)); \"don't feel obligated\" ([60:27](https://oprdvolunteerabuse.org/evidence/coercion/?t=60:27)); and \"don't feel that you are required or obligated to stay in any way\" ([60:34](https://oprdvolunteerabuse.org/evidence/coercion/?t=60:34)).\n\nA park manager who tells an unpaid volunteer four times in three minutes that he is not obligated to stay, at the end of an hour like that, is telling him to leave.\n\nI paused. I was calculating how to say I was staying without admitting I could not leave on short notice, which would have told them I could be pushed out. My placements for the year were already on the schedule, and walking out meant losing them. Then I answered: \"I don't feel obligated. I'm here by choice\" ([61:04](https://oprdvolunteerabuse.org/evidence/coercion/?t=61:04)).\n\nThree weeks later [I put the tone of it in writing to the program manager](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/): \"That wasn't support—it was pressure. The interaction felt coercive and deeply unprofessional. And you can hear it clearly in his tone.\""
            },
            {
                "t": "says",
                "md": "\"Overall Sam accepted the feedback but Management found they had to really explain each point and provide examples and tie multiple interactions together.\""
            },
            {
                "t": "record",
                "md": "False. I answered every point they raised, and where a claim was untrue I said so and asked what it rested on ([44:41](https://oprdvolunteerabuse.org/evidence/coercion/?t=44:41)), and asked again near the end of the meeting ([52:42](https://oprdvolunteerabuse.org/evidence/coercion/?t=52:42)). Nothing was produced in sixty-two minutes."
            }
        ]
    },
    {
        "heading": "03/05/25 \u2014 the recording",
        "blocks": [
            {
                "t": "says",
                "md": "\"Unprompted, Ranger Supervisor [Park Supervisor] received a text from Sam of a YouTube link that is a recording of their conversation. Sam never informed Park Manager [Park Manager] or [Park Supervisor] the conversation was being recorded.\""
            },
            {
                "t": "record",
                "md": "True. Two public officials sat an unpaid volunteer down at a picnic table in a public park and questioned him for an hour. I recorded it.\n\nI sent it to them afterward, and I kept it private, because I thought knowing a record existed would make them stop.\n\nThey did not stop. They sent a man. Six days after that the park manager dismissed me by phone and gave me twenty-four hours to leave the park.\n\nI did not publish it for two months. I wrote to them instead. [On May 9 I set the whole account out again](https://oprdvolunteerabuse.org/accountability/oprd/01JTW5KP2G3YRHJCP9QCFDX1T4/). [On May 20 I wrote](https://oprdvolunteerabuse.org/accountability/oprd/01JVPH4Z7G0VBTE6PWCDVCRF5X/): \"It has been ten days since I resent the letter documenting my experience at Honeyman… Your silence — again — is noted.\"\n\nThey never answered. I released the recording publicly on May 27, 2025, and [told the program manager the same day](https://oprdvolunteerabuse.org/accountability/oprd/01JW9WVW38VHEKAGZVCX7554C8/)."
            }
        ]
    },
    {
        "heading": "03/10/25 \u2014 the admonition",
        "blocks": [
            {
                "t": "says",
                "md": "that [Program Manager] called me about \"the uninformed recording\" and explained that \"as a volunteer, Sam is an agent of the state and as such is held to a higher standard, so... he cannot record conversations without informing the other parties present.\""
            },
            {
                "t": "record",
                "md": "False. I recorded that call. She never said anything about a higher standard. I told her they were public officials in a public setting, and she answered that as a volunteer I was an agent of the state.\n\nTrue: five days after the meeting, the program manager called me. The subject of the call was not what happened at that table. It was that I had recorded it."
            }
        ]
    },
    {
        "heading": "03/21/25 \u2014 the hearsay",
        "blocks": [
            {
                "t": "says",
                "md": "\"Another Park Host at Honeyman reaches out to park management to inform them that Sam has been expressing dissatisfaction with the rangers, stating they are unhelpful, and has been saying some concerning things (re-end of the world).\""
            },
            {
                "t": "record",
                "md": "Manufactured."
            }
        ]
    },
    {
        "heading": "03/21/25 \u2014 the journal",
        "blocks": [
            {
                "t": "says",
                "md": "\"Ranger Faye informed Park Supervisor [Park Supervisor] that Sam had a found item (a journal)... During this interaction Sam also told Faye that the Rangers at Honeyman were unhelpful. Ranger Faye stated that Sam said this multiple times to her throughout the interaction.\""
            },
            {
                "t": "record",
                "md": "False. I found a veteran's journal while cleaning. I told a seasonal ranger that not every ranger goes the extra mile on things like that, and I wanted someone to try ([4:38](https://oprdvolunteerabuse.org/evidence/expulsion/?t=4:38)).\n\nThe program manager asked which rangers I was referring to. I told her it was a general comment, not about Honeyman: \"I was not dissatisfied. I did not express any dissatisfaction. I was not talking about Honeyman in particular. This was a general comment\" ([5:28](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:28)).\n\nAnd: \"I'm very surprised this is the reason being used because it was not meant as anything in particular. It was just me trying to frame how important I thought it was that we tried to get this journal back to its owner\" ([6:09](https://oprdvolunteerabuse.org/evidence/expulsion/?t=6:09)).\n\nShe asked three times. \"Did you express dissatisfaction with a park host?\" ([4:26](https://oprdvolunteerabuse.org/evidence/expulsion/?t=4:26)). \"So which Rangers were you referring to?\" ([5:30](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:30)). \"But isn't that mean that it's an observation about Honeyman's staff?\" ([5:51](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:51)). I answered each time. The accusation is in this document. My answers are not."
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the dismissal",
        "blocks": [
            {
                "t": "says",
                "md": "\"Park Manager [Park Manager] called Sam to arrange time for an in-person discussion... Sam kept talking over [Park Manager], and as the conversation was no longer productive... Park Manager [Park Manager] dismissed Sam from volunteer service at Honeyman State Park, and gave him 24 hours to leave his park host site.\""
            },
            {
                "t": "record",
                "md": "False. I did not refuse to meet him, and I did not talk over him. [I gave my account of that call the next day](https://oprdvolunteerabuse.org/evidence/expulsion/?t=6:58): \"I was not refusing to meet with him. I simply asked him why… he ended up dismissing me on the phone before we had settled where we would meet or when we would meet. That was on [Park Manager]. I did not refuse to see him at all. That never happened.\"\n\nI asked why because of what the last meeting had been. On the same call I said it: \"as far as the meeting on the 5th they were not setting expectations, they were setting a pretext to get rid of me,\" and when he called to schedule another one three days before I was due to leave, \"I knew I was being ambushed a third time by him, so I asked him why\" ([7:20](https://oprdvolunteerabuse.org/evidence/expulsion/?t=7:20), [8:04](https://oprdvolunteerabuse.org/evidence/expulsion/?t=8:04)).\n\n[My departure was already arranged for March 31, one week away, and signed off in writing on March 14.](https://oprdvolunteerabuse.org/accountability/oprd/01JPB7G1BRWV6V8BFPPHGCY688/) He dismissed me on the phone that afternoon and gave me twenty-four hours to leave the park.\n\n[I wrote to the program manager the same afternoon](https://oprdvolunteerabuse.org/accountability/oprd/01JQ51JFPRZVFQ28F1R1ASPWNE/): \"I was not given any paperwork or official documentation. I was simply told to turn over my keys and leave within 24 hours.\" I named what it was: \"I believe this dismissal was not only unprofessional but retaliatory, stemming from a series of escalating tensions initiated after I submitted a respectful email expressing concern over a prior interaction with leadership. Since that moment, I've experienced a breakdown in communication, exclusion, and intimidation. Today's action felt targeted and final, without process or fairness.\"\n\nI told her I had no housing lined up and limited funds, and I asked for review and immediate support: \"I believe I've served with integrity and deep commitment to the mission of Oregon State Parks, and I only ask that I be treated with the same respect.\"\n\nThat evening the park manager came to my site for the keys and the binder. [I recorded it](https://oprdvolunteerabuse.org/evidence/dismissal/?t=15:09). On camera I asked about paperwork, and he said: \"Just the conversation we had.\""
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the video",
        "blocks": [
            {
                "t": "says",
                "md": "that my email to [Program Manager] included \"a link to a public YouTube video that details his opinions of park staff, including their names,\" titled \"I Was Dismissed Without Cause: My Experience at Honeyman State Park, Oregon (OPRD).\""
            },
            {
                "t": "record",
                "md": "False. The video is not about my opinions of park staff. In that email I wrote: \"To help provide a fuller picture, I've recorded a video explaining the sequence of events and the emotional and practical weight this situation has placed on me. I've also included my documentation.\"\n\n[The video is in the archive.](https://oprdvolunteerabuse.org/evidence/dismissal/) I recorded it an hour after the park manager dismissed me, recounting what had just happened: \"I'm at Honeyman State Park… I've been volunteering here for two months, just one week shy of two months. I have been a model volunteer here. The volunteers love me. The guests love me. Most of the rangers do\" ([0:12](https://oprdvolunteerabuse.org/evidence/dismissal/?t=0:12)).\n\nA citizen dismissed by a state agency that day said so in public. That is his right under the First Amendment."
            }
        ]
    },
    {
        "heading": "03/24/25 \u2014 the recording, shared",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam sends a link to his recording of the 3/5/25 conversation to another park host at Honeyman.\""
            },
            {
                "t": "record",
                "md": "True."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 the videos",
        "blocks": [
            {
                "t": "says",
                "md": "\"[Program Manager] goes to review the video Sam shared earlier, and a second public video was posted sharing more of his opinion of the dismissal at Honeyman. The second video was later removed and is not listed on Sam's YouTube account.\""
            },
            {
                "t": "record",
                "md": "False."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 the [Program Manager] call",
        "blocks": [
            {
                "t": "says",
                "md": "\"Engagement Programs Manager [Program Manager] has a phone call with Sam. Topics that were attempted to be addressed directly included: inappropriate conversation about the end of the world with staff and volunteers, having him explain where he sees the line between personal experience and professional experience as a park host, confirming the dismissal form Honeyman and sharing what next steps would be to determine his eligibility for the park host program. While Sam was able to express how these situations mad him feel, when pressed for the specific examples that lead him to feeling this way, it was difficult for him to provide detailed grounded references to situations, or confirm behavior that had been reported by multiple sources.\""
            },
            {
                "t": "record",
                "md": "False. I did not describe feelings. I named the people, the incidents, and what was said to me, and all of it is on [the recording of that call](https://oprdvolunteerabuse.org/evidence/expulsion/). Thirty-one minutes, with transcript and chapters in the archive.\n\nThe program manager opened by telling me the dismissal was \"still moving forward\" and \"that's not going to be overturned\" ([2:38](https://oprdvolunteerabuse.org/evidence/expulsion/?t=2:38)). The questions came after that. I told her the framing was vague and I was not hearing specifics ([4:05](https://oprdvolunteerabuse.org/evidence/expulsion/?t=4:05)).\n\nEvery item she raised came from someone she would not name: \"both a park host and an OPRD staff member\" ([3:23](https://oprdvolunteerabuse.org/evidence/expulsion/?t=3:23)), \"reported by multiple folks\" ([9:50](https://oprdvolunteerabuse.org/evidence/expulsion/?t=9:50)). She produced no email, no text, and no name in thirty-one minutes.\n\nShe asked the same thing three ways, trying for a different answer: had I expressed dissatisfaction with a park host ([4:26](https://oprdvolunteerabuse.org/evidence/expulsion/?t=4:26)), which rangers I meant ([5:30](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:30)), and whether it was an observation about Honeyman's staff ([5:51](https://oprdvolunteerabuse.org/evidence/expulsion/?t=5:51)). My answer did not change: I found a veteran's journal, I told a seasonal ranger I wanted someone to try to return it, and it was not about Honeyman ([6:00](https://oprdvolunteerabuse.org/evidence/expulsion/?t=6:00)). She filed that: \"I'm glad I got that from your perspective\" ([8:18](https://oprdvolunteerabuse.org/evidence/expulsion/?t=8:18)).\n\nThen she moved to the end of the world ([8:34](https://oprdvolunteerabuse.org/evidence/expulsion/?t=8:34)). I refused the premise: \"I do not know what you're talking about. I have no idea what you're talking about\" ([8:54](https://oprdvolunteerabuse.org/evidence/expulsion/?t=8:54)). I corrected it on the spot: \"this sounds blown way out of proportion. I have never said the world is ending. What I see is instability in our system… What you're saying is not what I said\" ([9:17](https://oprdvolunteerabuse.org/evidence/expulsion/?t=9:17)). She took none of it and moved on ([9:50](https://oprdvolunteerabuse.org/evidence/expulsion/?t=9:50)).\n\nShe asked how I separate personal from professional ([10:11](https://oprdvolunteerabuse.org/evidence/expulsion/?t=10:11)). I answered: \"I don't believe I've ever been unprofessional… I have had a lot of good experiences here with guests, with volunteers, with the staff. The only problems I had here were with the leadership\" ([10:27](https://oprdvolunteerabuse.org/evidence/expulsion/?t=10:27)).\n\nShe raised the poem ([11:23](https://oprdvolunteerabuse.org/evidence/expulsion/?t=11:23)), the volume of email ([13:19](https://oprdvolunteerabuse.org/evidence/expulsion/?t=13:19)), a text to another ranger ([18:14](https://oprdvolunteerabuse.org/evidence/expulsion/?t=18:14)), and Tugman ([19:19](https://oprdvolunteerabuse.org/evidence/expulsion/?t=19:19)). I gave her the context for each: I had emailed one person because I believed he was my supervisor, and I stopped when they told me not to ([13:45](https://oprdvolunteerabuse.org/evidence/expulsion/?t=13:45)).\n\nShe asked why I wrote the trust email ([20:13](https://oprdvolunteerabuse.org/evidence/expulsion/?t=20:13)). I told her it was in the email and that she was asking me to narrate two months ([21:38](https://oprdvolunteerabuse.org/evidence/expulsion/?t=21:38)). I would not tell her what he had disclosed to me about himself. What I named was the broken training commitment ([22:53](https://oprdvolunteerabuse.org/evidence/expulsion/?t=22:53)), and, when she pressed, the ninety minutes in the welcome center ([22:16](https://oprdvolunteerabuse.org/evidence/expulsion/?t=22:16)).\n\nAt the end she asked whether there was anything else I wanted to share ([24:05](https://oprdvolunteerabuse.org/evidence/expulsion/?t=24:05)). I said: \"I legitimately care about the park system. I came here with the best intentions. I do a very good job. My communication might be a little different than some people's, but that should not be a reason to treat me badly, and that's what's happened\" ([24:20](https://oprdvolunteerabuse.org/evidence/expulsion/?t=24:20)). She said, \"I just want to make sure I clarify, because I don't want to just have this and being general: treat you badly means\" ([24:59](https://oprdvolunteerabuse.org/evidence/expulsion/?t=24:59)). I told her: \"the hourlong gaslighting, telling me to eat glass and saying they won't give me the benefit of the doubt, or coming into the welcome center and telling me about my mistakes\" ([25:08](https://oprdvolunteerabuse.org/evidence/expulsion/?t=25:08)). Each of those is a grounded reference to a situation.\n\nWhat she did on that call has a name. DARVO: deny, attack, reverse victim and offender. She denied the conduct I had documented, put the reports of unnamed people to me as things I had to explain, and closed by deciding whether I would be allowed to serve at all.\n\nShe closed by telling me she would now decide what service with Oregon State Parks looked like at all ([27:42](https://oprdvolunteerabuse.org/evidence/expulsion/?t=27:42))."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 \"for being me\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"Following the conversation with [Program Manager], Sam posts another video sharing his opinion on the phone call, 'If I'm kicked out, it will be for being me.'\""
            },
            {
                "t": "record",
                "md": "False. [The video is a morning update to my audience](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32), hours before my departure deadline: someone had helped me, the packing, the tent structure, the emptied tanks, showering in the campground again, the life I like. It names no one, and it is not my opinion of the phone call.\n\nWhat it says about the call is two sentences: that she was reviewing and I would hear by Friday whether I could stay in the program ([0:47](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=47)), and that I felt listened to and also felt \"the institutional impulse to protect\" ([2:47](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=167)).\n\nThe line she quotes comes minutes later, and it is about their reframing of my communication style, not her call: \"they don't like my clarity, my depth, my presence\" ([3:46](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=226)), \"I'm not apologizing for those things anymore\" ([3:54](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=234)), \"so if I'm kicked out of the program, I'm kicked out of the program for being me. That's the reason why\" ([4:32](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=272)), \"so if that happens, that says everything about them and nothing about me\" ([4:42](https://rswfire.com/library/signal/01JQ76PWJRJ1BYAMAFDF77YK32?t=282)).\n\nI was packing to leave a place I had been forced out of, working out in real time what was being done to me and how I would live with it. The program manager took two sentences out of that, filed them as my opinion of her call, and put them in the file the Oregon State Police received."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 \"eat glass\"",
        "blocks": [
            {
                "t": "says",
                "md": "\"In a phone call between [Program Manager] and Park Manager [Park Manager] confirms that he did not tell Sam to 'eat glass' in a derogatory way, but was using it as an analogy to say that feedback can be hard to accept at first, but in the long run, it makes us stronger \u2013 like eating glass.\""
            },
            {
                "t": "record",
                "md": "False. He said it to me twice, on tape ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17), [42:05](https://oprdvolunteerabuse.org/evidence/coercion/?t=42:05)), after reminding me of his fifteen years, the disciplinary processes, and HR ([22:40](https://oprdvolunteerabuse.org/evidence/coercion/?t=22:40)). I was an unpaid volunteer, alone at that table, with no union, no HR access, and no recourse.\n\nThe program manager had everything before she wrote this entry. She had known the recording existed since March 10. She had my account of it from the call that same day. [She had it in writing from me hours later](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/): \"Ryan telling me to 'eat glass' during our March 5 meeting was not a miscommunication—it was inappropriate and aggressive.\"\n\nShe called him, took his explanation of his own words by phone, and entered that in the file. His version is in this document. Mine is not, and neither is the recording."
            }
        ]
    },
    {
        "heading": "03/25/25 \u2014 my follow-up",
        "blocks": [
            {
                "t": "says",
                "md": "that my follow-up email to [Program Manager] made \"claims,\" and lists them: that [Park Manager] said I could leave, said eat glass aggressively, and had not given me the benefit of the doubt; that [Volunteer Services Lead] promised training that didn't happen; the [Park Supervisor] text; and that \"Management's response to him was due to him putting complaints in writing.\""
            },
            {
                "t": "record",
                "md": "False. Those are not claims. [The letter is on the record](https://oprdvolunteerabuse.org/accountability/oprd/01JQ8HA5JRRCWX12W7B52YRVAT/), and it says what it is: \"additional context for the record—both to clarify key points and to express concern about how some of what I shared may be interpreted.\" It closes: \"Please include this message in my file as part of the ongoing review.\"\n\nEvery item in it is on the March 5 recording she already had. He told me I could leave, four times in the final two minutes ([59:31](https://oprdvolunteerabuse.org/evidence/coercion/?t=59:31)). He told me to chew glass and swallow it, twice ([23:17](https://oprdvolunteerabuse.org/evidence/coercion/?t=23:17), [42:05](https://oprdvolunteerabuse.org/evidence/coercion/?t=42:05)), and I told her he had used the same phrase the first time he confronted me in the welcome center. When I told him I was not getting the benefit of the doubt, he answered, \"I may not be able to help you with that\" ([50:32](https://oprdvolunteerabuse.org/evidence/coercion/?t=50:32)). The training commitment is confirmed in his own words ([7:33](https://oprdvolunteerabuse.org/evidence/coercion/?t=7:33)). He told me to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16)).\n\nThe letter also names what I believed the real issue was: \"how I've held leadership accountable in writing… The discomfort, in my view, stemmed not from what I said—but from the fact that I said it in a format that created a record.\"\n\nAnd it asked for one thing: \"All I ask is that this be viewed with honesty and fairness. I am not asking for special treatment—just integrity in how this is held and assessed.\""
            }
        ]
    },
    {
        "heading": "03/26/25 \u2014 the letter",
        "blocks": [
            {
                "t": "says",
                "md": "that [Program Manager] sent \"notification of Sam's dismissal from Volunteer Service, including a copy of the formal letter.\""
            },
            {
                "t": "record",
                "md": "[True.](https://oprdvolunteerabuse.org/accountability/oprd/01JQA2WM60RX7MSJQ5QPFD8AR2/)"
            }
        ]
    },
    {
        "heading": "The determination",
        "blocks": [
            {
                "t": "says",
                "md": "that I \"was not receptive,\" that I shared my opinion \"publicly rather than through the internal channels OPRD made available to him,\" and that due to \"the public statements made about park staff and the dismissal\" I am \"not able to be a professional representative of the park host program.\""
            },
            {
                "t": "record",
                "md": "False. There were no internal channels, and there still are none.\n\nAs a volunteer I had no HR access. The person I was told was my supervisor had no supervisory authority, which the park manager told me thirty minutes into the March 5 meeting, more than a month after I arrived at the park ([29:52](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:52)). The instruction I was given at that table was to stop sending follow-up emails ([29:16](https://oprdvolunteerabuse.org/evidence/coercion/?t=29:16)). The program manager's first call to me was about my recording. When I called her back and told her what was happening, she told me to \"put my head down, every park is different.\"\n\nI told the program manager while it was happening. She is the level above the park, she is who a volunteer is left with, and she is the author of this document. Afterward I wrote to her, to the director, and to the agency. [The whole correspondence is published](https://oprdvolunteerabuse.org/accountability/oprd/).\n\nThe director answered three times in eighteen months. The first came when [I posted an open letter to her](https://oprdvolunteerabuse.org/accountability/oprd/01K3FDT5P09S9N9QSZYWS9KN7A/) on r/volunteer: \"I am writing this letter publicly because private channels have been met with silence.\" [She answered twenty-one hours later](https://oprdvolunteerabuse.org/accountability/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8/). She thanked me for my service, said she valued volunteers, declined to address anything I had raised, and promised that my concerns would be \"reviewed through the appropriate channels within the department.\" She never named that channel, and nothing from any review ever reached me.\n\n[In December](https://oprdvolunteerabuse.org/accountability/oprd/01KBZ9S95G2W5B44TTGT6HA69N/), in her second letter to me: \"we've reached a point where I don't believe further correspondence will lead to the resolution you're seeking… I must focus on the responsibilities I carry today and the work ahead for the organization and its people.\" False.\n\nThat letter was written to be answered in anger. [My reply was one line](https://oprdvolunteerabuse.org/accountability/oprd/01KBZVCZ88QJKP17DTVCYE0VZB/): \"I acknowledge receipt of your message,\" signed for the first time with the archive. [Hers came back an hour later](https://oprdvolunteerabuse.org/accountability/oprd/01KBZZ00WRN29ERHYG1ANPRH8D/): \"And I yours.\"\n\nNo one ever named a channel, and no review ever reached me.\n\nThe grounds are named in their own words: \"the public statements made about park staff and the dismissal.\" They expelled me for public statements about their agency, and they wrote that reason down themselves. A state agency punishing a person for public statements about it violates the First Amendment."
            }
        ]
    },
    {
        "heading": "The closing note",
        "blocks": [
            {
                "t": "says",
                "md": "\"There are numerous additional emails and texts sent to staff, primarily Rangers [Volunteer Services Lead] and Leif that are not included as a reference, but should be noted for excessive communication.\""
            },
            {
                "t": "record",
                "md": "Baseless."
            }
        ]
    },
    {
        "heading": "05/20/25",
        "blocks": [
            {
                "t": "says",
                "md": "\"Robert Samuel Smith has sent two follow up emails... Neither email requested a response. [Program Manager] went to look to see if this was related to a new YouTube Video posted on his channel, and found that almost all of his videos had been deleted... To document what had been observed on the videos by multiple OPRD staff, the previous videos posted included negative remarks about Honeyman park staff, [Park Supervisor], [Park Manager], and [Volunteer Services Lead], as well remarks about [Program Manager].\""
            },
            {
                "t": "record",
                "md": "False. [The emails are on the record](https://oprdvolunteerabuse.org/accountability/oprd/01JVPH4Z7G0VBTE6PWCDVCRF5X/), and neither one mentions a video. There was nothing in them to send anyone to my channel.\n\nBy this date the agency had expelled me from every park in Oregon, two months earlier. There was no volunteer relationship left, and my YouTube channel was never theirs to monitor.\n\nI deleted it because I built my own platform for my videos. My life has never centered on them.\n\nWhat this entry documents is a state employee, and \"multiple OPRD staff,\" watching a private citizen's channel and writing down what they saw there, two months after the agency had severed every tie to him."
            }
        ]
    },
    {
        "heading": "08/2025 \u2013 01/2026",
        "blocks": [
            {
                "t": "says",
                "md": "\"Additional email received from Sam White to [Program Manager], Honeyman staff, and Lisa Sumption. Most are informative form Sam as to his experience and expectations and do not request a response.\""
            },
            {
                "t": "record",
                "md": "I wrote to them about what they had done, and asked for nothing. [All of it is published.](https://oprdvolunteerabuse.org/accountability/oprd/)"
            }
        ]
    },
    {
        "heading": "01/06/26",
        "blocks": [
            {
                "t": "says",
                "md": "\"Sam White sends an email threatening to sue [Program Manager].\""
            },
            {
                "t": "record",
                "md": "No email from January 6 exists. [On January 9 I wrote to her](https://oprdvolunteerabuse.org/accountability/oprd/01KEK5MQNRVQK9HPE1AB1N2PPE/), and [on January 16 I gave notice under 42 U.S.C. \u00a7 1983](https://oprdvolunteerabuse.org/accountability/oprd/01KF3KC3AR9KFMTRD44ZFFMZ2C/).\n\nFive days after that, the metadata of this document shows its author returned to it and finished her final edits. Six weeks after that, it was in the hands of the state police.\n\n[On July 8, 2026, I withdrew the individual capacity claim against her.](https://oprdvolunteerabuse.org/accountability/oprd/01KX28CF90H15CJVJRJWKXCP5N/)"
            }
        ]
    },
    {
        "heading": "Where the timeline ends",
        "blocks": [
            {
                "t": "p",
                "md": "The last edit to this document was January 21, 2026. Nothing was ever added after that.\n\nTwo months later, on March 24, 2026, one year to the day after my dismissal, [armed officers came to my door, behind a locked gate, on restricted federal land](https://oprdvolunteerabuse.org/accountability/oprd/01KMTJ21JGSSD4W0BTW6HP1E05/).\n\nThey sent police over a document that records no threat, no crime, and no new event in the two months before they sent them. Its last entry is my notice of a lawsuit."
            }
        ]
    }
];
