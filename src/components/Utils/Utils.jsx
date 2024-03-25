import { HiOutlineCursorArrowRays } from "react-icons/hi2";
import { LuMailOpen } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegFile } from "react-icons/fa6";
import { SiMicrosoftteams } from "react-icons/si";
import { BsPersonSquare } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineViewKanban } from "react-icons/md";

export const menu = [
    {
        title: "Email tracking",
        icon: <LuMailOpen />,
        path: "/",
        id: "email-tracking"
    },
    {
        title: "Click Report",
        icon: <HiOutlineCursorArrowRays />,
        path: "/click-report",
        id: "click-report"
    },
    {
        title: "Campaigns",
        icon: <HiOutlineSpeakerphone />,
        path: "/campaigns",
        id: "campaigns"
    },
    {
        title: "Advanced Documents",
        icon: <FaRegFile />,
        path: "/advanced-documents",
        id: "advanced-documents"
    },
    {
        title: "Email Productivity",
        icon: <MdOutlineViewKanban />,
        path: "/email-productivity",
        id: "email-productivity"
    },
    {
        title: "Contacts",
        icon: <BsPersonSquare />,
        path: "/contacts",
        id: "contacts",
    },
    {
        title: "Templates",
        icon: <RxFileText />,
        path: "/templates",
        id: "templates"
    },
    {
        title: "Integrations",
        icon: <LiaProjectDiagramSolid />,
        path: "/integrations",
        id: "integrations"
    },
    {
        title: "Team",
        icon: <SiMicrosoftteams />,
        path: "/team",
        id: "team"
    },
    {
        title: "Account and Settings",
        icon: <RiUserSettingsLine />,
        path: "/account-settings",
        id: "account-settings"
    },
]