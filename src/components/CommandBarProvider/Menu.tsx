import {
  Command,
  CommandMenu,
  CommandWrapper,
  useCommands,
  useKmenu
} from "kmenu";
import React, { FC } from "react";
const Menu: FC = () => {
  const { setOpen } = useKmenu();

  const main: Command[] = [
    {
      category: "Utility",
      commands: [
        {
          text: "Documentation...",
          perform: () => setOpen(2)
        },
        {
          text: "Share...",
          perform: () => setOpen(3)
        },
        {
          text: "Copy URL",
          perform: () => navigator.clipboard.writeText("https://kmenu.hxrsh.in")
        }
      ]
    },
    {
      category: "Links",
      commands: [
        {
          text: "Source",
          href: "https://github.com/harshhhdev/kmenu",
          newTab: true,
          shortcuts: { keys: ["s", "r"] }
        },
        {
          text: "Issues",
          href: "https://github.com/harshhhdev/kmenu/issues",
          newTab: true,
          shortcuts: { keys: ["i"] }
        },
        {
          text: "Pull Requests",
          href: "https://github.com/harshhhdev/kmenu/pulls",
          newTab: true
        },
        {
          text: "Discussions",
          href: "https://github.com/harshhhdev/kmenu/discussions",
          newTab: true
        }
      ]
    },
    {
      category: "Socials",
      commands: [
        {
          text: "Twitter",
          href: "https://twitter.com/harshhhdev",
          newTab: true,
          shortcuts: { keys: ["t", "w"] }
        },
        {
          text: "GitHub",
          href: "https://github.com/harshhhdev",
          newTab: true
        },
        {
          text: "Dribbble",
          href: "https://dribbble.com/harshhhdev",
          newTab: true,
          shortcuts: { keys: ["d"] }
        }
      ]
    }
  ];

  const docs: Command[] = [
    {
      category: "Documentation",
      commands: [
        {
          text: "Quickstart",
          href: "https://github.com/harshhhdev/kmenu#-quickstart",
          newTab: true
        },
        {
          text: "Using the Provider",
          href: "https://github.com/harshhhdev/kmenu/#using-the-provider",
          newTab: true
        },
        {
          text: "Adding Commands",
          href: "https://github.com/harshhhdev/kmenu#adding-commands",
          newTab: true
        },
        {
          text: "useKmenu Hook",
          href: "https://github.com/harshhhdev/kmenu#usekmenu-hook",
          newTab: true
        },
        {
          text: "useCommands Hook",
          href: "https://github.com/harshhhdev/kmenu#usecommands-hook",
          newTab: true
        },
        {
          text: "Customising the Menu",
          href: "https://github.com/harshhhdev/kmenu#customising-the-menu",
          newTab: true
        },
        {
          text: "Setting up the Menu",
          href: "https://github.com/harshhhdev/kmenu#setting-up-the-menu",
          newTab: true
        },
        {
          text: "Nested Menus",
          href: "https://github.com/harshhhdev/kmenu#setting-up-the-menu",
          newTab: true
        },
        {
          text: "useShortcut Hook",
          href: "https://github.com/harshhhdev/kmenu#useshortcut-hook",
          newTab: true
        }
      ]
    }
  ];

  const share: Command[] = [
    {
      category: "Share to...",
      commands: [
        {
          text: "Twitter",
          href:
            "https://twitter.com/intent/tweet?text=Check%20out%20these%20cool%20UI%20experiments%20by%20%40harshhhdev%0Ahttps%3A%2F%2Fkmenu.hxrsh.in%2F",
          newTab: true
        },
        {
          text: "Facebook",
          href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            "https://kmenu.hxrsh.in"
          )}`,
          newTab: true
        },
        {
          text: "Linkedin",
          href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            "https://kmenu.hxrsh.in"
          )}`,
          newTab: true
        }
      ]
    }
  ];

  const [mainCommands] = useCommands(main);
  const [docsCommands] = useCommands(docs);
  const [shareCommands] = useCommands(share);

  return (
    <CommandWrapper>
      <CommandMenu commands={mainCommands} index={1} crumbs={["Home"]} />
      <CommandMenu
        commands={docsCommands}
        index={2}
        crumbs={["Home", "Search"]}
      />
      <CommandMenu
        commands={shareCommands}
        index={3}
        crumbs={["Home", "Share"]}
      />
    </CommandWrapper>
  );
};

export default Menu;
