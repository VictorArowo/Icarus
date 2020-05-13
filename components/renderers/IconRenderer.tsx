import { Element } from "../../utils/form";
import SingleLineIcon from "../../icons/SingleLineIcon";
import MultLineIcon from "../../icons/MultLineIcon";
import CheckIcon from "../../icons/CheckIcon";
import HashtagIcon from "../../icons/HashtagIcon";
import ToggleIcon from "../../icons/ToggleIcon";
import DropdownIcon from "../../icons/DropdownIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import ClockIcon from "../../icons/ClockIcon";
import MailIcon from "../../icons/MailIcon";
import LinkIcon from "../../icons/LinkIcon";

interface Props {
  elem: Element;
}

const IconRenderer: React.FC<Props> = ({ elem }) => {
  if (elem.text === "Multi-Line Text") {
    return <MultLineIcon />;
  }

  if (elem.text === "Single-Line Text") {
    return <SingleLineIcon />;
  }

  if (elem.text === "Multiple Choice") {
    return <CheckIcon />;
  }

  if (elem.text === "Number") {
    return <HashtagIcon />;
  }

  if (elem.text === "Yes/No") {
    return <ToggleIcon />;
  }

  if (elem.text === "Dropdown") {
    return <DropdownIcon />;
  }

  if (elem.text === "Date") {
    return <CalendarIcon />;
  }

  if (elem.text === "Time") {
    return <ClockIcon />;
  }
  if (elem.text === "Email Address") {
    return <MailIcon />;
  }

  if (elem.text === "Website") {
    return <LinkIcon />;
  }

  return <div>hi</div>;
};

export default IconRenderer;
