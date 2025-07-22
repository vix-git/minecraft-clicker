import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [points, setPoints] = useState(0)
  const [clicks, setClicks] = useState(0)
  const [upgradeLevel, setUpgradeLevel] = useState(1)

  // Buscar estado do jogo ao carregar
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/state/')
      .then(res => res.json())
      .then(data => {
        setPoints(data.points)
        setClicks(data.clicks)
        setUpgradeLevel(data.upgrade_level)
      })
  }, [])

  // Função para clicar no bloco
  const handleClick = () => {
    const newClicks = clicks + 1
    const newPoints = points + upgradeLevel

    setClicks(newClicks)
    setPoints(newPoints)
  }

  // Função para comprar upgrade
  const buyUpgrade = () => {
    const upgradeCost = upgradeLevel * 10
    if (points >= upgradeCost) {
      const newPoints = points - upgradeCost
      const newLevel = upgradeLevel + 1

      setPoints(newPoints)
      setUpgradeLevel(newLevel)

      // Só aqui fazemos a requisição para salvar
      fetch('http://127.0.0.1:8000/api/state/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          points: newPoints,
          clicks: clicks,
          upgrade_level: newLevel
        })
      })
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Minecraft Clicker 🪓</h1>
      <p>Cliques: {clicks}</p>
      <p>Pontos: {points}</p>
      <p>Nível do Machado: {upgradeLevel}</p>

      <button onClick={handleClick} style={{ padding: '20px', fontSize: '18px' }}>
        Quebrar Bloco 🧱
      </button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={buyUpgrade}>
          Comprar Upgrade ({upgradeLevel * 10} pontos)
        </button>
      </div>
    </div>
  )
}

export default App
