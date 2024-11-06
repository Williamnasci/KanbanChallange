interface HeaderProps {
    handleSaveChanges: () => void;
}

const Header: React.FC<HeaderProps> = ({handleSaveChanges}) => (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
    <h1 className="text-2xl font-semibold">Quadro Pedido Pago</h1>
<button
onClick={handleSaveChanges}
className="bg-blue-500 text-white rounded px-4 py-2"
    >
    Salvar alterações
</button>
</div>
);

export default Header;
