import React from 'react'
import Link from '../link'
export default function Home() {
    return (
        <div>
            <h2>
                Это сайт по игре Pocket Combats
            </h2>
            <p>
                Вы можете посчитать свои характеристики перейдя в раздел <Link to="/calculator">калькулятор</Link> или посмотреть <Link to="/trade"> историю торговли предметами </Link>
            </p>
        </div>
    )
}