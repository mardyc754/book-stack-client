type NavbarDropdownItem = {
  dropdownElementKey: string;
  element: JSX.Element;
};

interface NavbarDropdownProps {
  label: string;
  items: NavbarDropdownItem[];
}

export const NavbarDropdown = ({ label, items }: NavbarDropdownProps) => {
  return (
    <li>
      <details>
        <summary>{label}</summary>
        <ul className="p-2 w-32 bg-base-100 rounded-t-none">
          {items.map(({ dropdownElementKey, element }) => (
            <li key={dropdownElementKey}>{element}</li>
          ))}
        </ul>
      </details>
    </li>
  );
};
