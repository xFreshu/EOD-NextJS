export interface IButtonProps {
  name: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}
