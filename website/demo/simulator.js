// UltimaChain ブロックチェーンシミュレーター

document.addEventListener('DOMContentLoaded', function() {
    // DOM要素
    const nodeCountSlider = document.getElementById('node-count');
    const nodeCountValue = document.getElementById('node-count-value');
    const txRateSlider = document.getElementById('tx-rate');
    const txRateValue = document.getElementById('tx-rate-value');
    const networkLatencySlider = document.getElementById('network-latency');
    const networkLatencyValue = document.getElementById('network-latency-value');
    const consensusTypeSelect = document.getElementById('consensus-type');
    const aiOptimizationToggle = document.getElementById('ai-optimization');
    const shardingToggle = document.getElementById('sharding');
    const startButton = document.getElementById('start-simulation');
    const pauseButton = document.getElementById('pause-simulation');
    const resetButton = document.getElementById('reset-simulation');
    const tpsValue = document.getElementById('tps-value');
    const confirmationTime = document.getElementById('confirmation-time');
    const networkLoad = document.getElementById('network-load');
    const energyEfficiency = document.getElementById('energy-efficiency');
    const dagCanvas = document.getElementById('dag-canvas');
    const txLog = document.getElementById('tx-log');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    const resetViewButton = document.getElementById('reset-view');

    // シミュレーション状態
    let simulationRunning = false;
    let simulationPaused = false;
    let simulationData = {
        nodes: [],
        links: [],
        transactions: [],
        blocks: [],
        metrics: {
            tps: 0,
            confirmationTime: 0,
            networkLoad: 0,
            energyEfficiency: 'high'
        }
    };

    // チャートオブジェクト
    let tpsChart, confirmationChart, networkChart, energyChart;

    // スライダーの値を表示
    nodeCountSlider.addEventListener('input', function() {
        nodeCountValue.textContent = this.value;
    });

    txRateSlider.addEventListener('input', function() {
        txRateValue.textContent = this.value;
    });

    networkLatencySlider.addEventListener('input', function() {
        networkLatencyValue.textContent = this.value;
    });

    // シミュレーション制御ボタン
    startButton.addEventListener('click', startSimulation);
    pauseButton.addEventListener('click', pauseSimulation);
    resetButton.addEventListener('click', resetSimulation);

    // ズームコントロール
    zoomInButton.addEventListener('click', zoomIn);
    zoomOutButton.addEventListener('click', zoomOut);
    resetViewButton.addEventListener('click', resetView);

    // チャートの初期化
    initializeCharts();

    // D3.jsのビジュアライゼーション初期化
    let simulation;
    let svg;
    let zoom;
    let g;
    initializeVisualization();

    // シミュレーション開始
    function startSimulation() {
        if (simulationPaused) {
            simulationPaused = false;
            startButton.textContent = '一時停止';
            addLogEntry('INFO', 'シミュレーションを再開しました');
            return;
        }

        if (simulationRunning) {
            pauseSimulation();
            return;
        }

        // シミュレーションパラメータの取得
        const nodeCount = parseInt(nodeCountSlider.value);
        const txRate = parseInt(txRateSlider.value);
        const networkLatency = parseInt(networkLatencySlider.value);
        const consensusType = consensusTypeSelect.value;
        const aiOptimization = aiOptimizationToggle.checked;
        const sharding = shardingToggle.checked;

        // シミュレーションデータの初期化
        resetSimulationData();
        initializeNodes(nodeCount);

        // UIの更新
        startButton.textContent = '一時停止';
        pauseButton.disabled = false;
        resetButton.disabled = false;
        simulationRunning = true;

        // ローディングプレースホルダーを削除
        const loadingPlaceholder = dagCanvas.querySelector('.loading-placeholder');
        if (loadingPlaceholder) {
            loadingPlaceholder.remove();
        }

        // ログエントリの追加
        clearLog();
        addLogEntry('INFO', 'シミュレーションを開始しました');
        addLogEntry('INFO', `ノード数: ${nodeCount}, トランザクション生成率: ${txRate}/秒, ネットワーク遅延: ${networkLatency}ms`);
        addLogEntry('INFO', `コンセンサスタイプ: ${getConsensusName(consensusType)}, AI最適化: ${aiOptimization ? 'オン' : 'オフ'}, シャーディング: ${sharding ? 'オン' : 'オフ'}`);

        // シミュレーションループの開始
        simulationLoop(txRate, networkLatency, consensusType, aiOptimization, sharding);
        
        // ビジュアライゼーションの更新開始
        updateVisualization();
    }

    // シミュレーション一時停止
    function pauseSimulation() {
        simulationPaused = true;
        startButton.textContent = '再開';
        addLogEntry('INFO', 'シミュレーションを一時停止しました');
    }

    // シミュレーションリセット
    function resetSimulation() {
        simulationRunning = false;
        simulationPaused = false;
        startButton.textContent = 'シミュレーション開始';
        pauseButton.disabled = true;
        resetButton.disabled = true;
        
        resetSimulationData();
        resetCharts();
        resetVisualization();
        
        // ローディングプレースホルダーを追加
        dagCanvas.innerHTML = `
            <div class="loading-placeholder">
                <div class="spinner"></div>
                <p>シミュレーションを開始してください</p>
            </div>
        `;
        
        addLogEntry('INFO', 'シミュレーションをリセットしました');
    }

    // シミュレーションデータのリセット
    function resetSimulationData() {
        simulationData = {
            nodes: [],
            links: [],
            transactions: [],
            blocks: [],
            metrics: {
                tps: 0,
                confirmationTime: 0,
                networkLoad: 0,
                energyEfficiency: 'high'
            }
        };
        
        updateMetricsDisplay();
    }

    // ノードの初期化
    function initializeNodes(count) {
        for (let i = 0; i < count; i++) {
            const node = {
                id: `node-${i}`,
                group: Math.floor(Math.random() * 3), // シャードグループ
                stake: Math.random() * 100, // ステーク量
                trustScore: 0.5 + Math.random() * 0.5, // 信頼度スコア
                x: Math.random() * dagCanvas.clientWidth,
                y: Math.random() * dagCanvas.clientHeight
            };
            simulationData.nodes.push(node);
        }
    }

    // シミュレーションメインループ
    function simulationLoop(txRate, networkLatency, consensusType, aiOptimization, sharding) {
        if (!simulationRunning) return;
        if (simulationPaused) {
            setTimeout(() => simulationLoop(txRate, networkLatency, consensusType, aiOptimization, sharding), 100);
            return;
        }

        // トランザクションの生成
        generateTransactions(txRate / 10); // 10分の1のレートで生成（100ms間隔で呼び出されるため）

        // トランザクションの処理
        processTransactions(networkLatency, consensusType, aiOptimization, sharding);

        // メトリクスの更新
        updateMetrics(consensusType, aiOptimization, sharding);

        // 100msごとに再実行
        setTimeout(() => simulationLoop(txRate, networkLatency, consensusType, aiOptimization, sharding), 100);
    }

    // トランザクションの生成
    function generateTransactions(count) {
        for (let i = 0; i < count; i++) {
            const tx = {
                id: `tx-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                sender: simulationData.nodes[Math.floor(Math.random() * simulationData.nodes.length)].id,
                receiver: simulationData.nodes[Math.floor(Math.random() * simulationData.nodes.length)].id,
                amount: Math.random() * 100,
                timestamp: Date.now(),
                status: 'pending',
                confirmationTime: null
            };
            
            simulationData.transactions.push(tx);
            
            if (Math.random() < 0.1) { // 10%の確率でログに表示
                addLogEntry('INFO', `新しいトランザクション: ${tx.id.substring(0, 8)}... (${tx.sender.substring(0, 6)} → ${tx.receiver.substring(0, 6)}, ${tx.amount.toFixed(2)} ULT)`);
            }
        }
    }

    // トランザクションの処理
    function processTransactions(networkLatency, consensusType, aiOptimization, sharding) {
        const pendingTxs = simulationData.transactions.filter(tx => tx.status === 'pending');
        
        if (pendingTxs.length === 0) return;
        
        // コンセンサスタイプに応じた処理時間の計算
        let baseProcessingTime;
        switch (consensusType) {
            case 'pou':
                baseProcessingTime = 50; // 50ms
                break;
            case 'pos':
                baseProcessingTime = 500; // 500ms
                break;
            case 'pow':
                baseProcessingTime = 5000; // 5000ms
                break;
            default:
                baseProcessingTime = 100;
        }
        
        // AI最適化による処理時間の短縮
        if (aiOptimization) {
            baseProcessingTime *= 0.5; // 50%短縮
        }
        
        // シャーディングによる並列処理
        if (sharding) {
            baseProcessingTime /= 3; // 3シャードで並列処理
        }
        
        // ネットワーク遅延の追加
        const totalProcessingTime = baseProcessingTime + networkLatency;
        
        // 処理するトランザクション数の決定
        let txToProcess;
        switch (consensusType) {
            case 'pou':
                txToProcess = Math.min(pendingTxs.length, 100); // 一度に最大100トランザクション
                break;
            case 'pos':
                txToProcess = Math.min(pendingTxs.length, 10); // 一度に最大10トランザクション
                break;
            case 'pow':
                txToProcess = Math.min(pendingTxs.length, 3); // 一度に最大3トランザクション
                break;
            default:
                txToProcess = Math.min(pendingTxs.length, 10);
        }
        
        // トランザクションの処理
        for (let i = 0; i < txToProcess; i++) {
            const tx = pendingTxs[i];
            tx.status = 'confirmed';
            tx.confirmationTime = totalProcessingTime;
            
            // 新しいブロックの作成（10トランザクションごとに1ブロック）
            if (i % 10 === 0) {
                const validatorNode = getValidatorNode(simulationData.nodes);
                const block = {
                    id: `block-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                    validator: validatorNode.id,
                    transactions: [tx.id],
                    timestamp: Date.now(),
                    previousBlocks: simulationData.blocks.length > 0 ? 
                        [simulationData.blocks[simulationData.blocks.length - 1].id] : []
                };
                
                simulationData.blocks.push(block);
                
                // ブロック間のリンクを作成
                if (block.previousBlocks.length > 0) {
                    block.previousBlocks.forEach(prevBlockId => {
                        const prevBlock = simulationData.blocks.find(b => b.id === prevBlockId);
                        if (prevBlock) {
                            simulationData.links.push({
                                source: prevBlock.validator,
                                target: validatorNode.id,
                                value: 1
                            });
                        }
                    });
                }
                
                if (Math.random() < 0.3) { // 30%の確率でログに表示
                    addLogEntry('SUCCESS', `新しいブロック: ${block.id.substring(0, 8)}... (バリデータ: ${validatorNode.id.substring(0, 6)}, トランザクション: ${block.transactions.length})`);
                }
            } else {
                // 既存のブロックにトランザクションを追加
                if (simulationData.blocks.length > 0) {
                    simulationData.blocks[simulationData.blocks.length - 1].transactions.push(tx.id);
                }
            }
        }
    }

    // バリデータノードの選択
    function getValidatorNode(nodes) {
        // 信頼度スコアとステーク量に基づいて重み付け
        const totalWeight = nodes.reduce((sum, node) => sum + node.trustScore * node.stake, 0);
        let random = Math.random() * totalWeight;
        
        for (const node of nodes) {
            const weight = node.trustScore * node.stake;
            if (random <= weight) {
                return node;
            }
            random -= weight;
        }
        
        return nodes[0]; // フォールバック
    }

    // メトリクスの更新
    function updateMetrics(consensusType, aiOptimization, sharding) {
        // 直近1秒間の確認済みトランザクション数からTPSを計算
        const now = Date.now();
        const recentTxs = simulationData.transactions.filter(tx => 
            tx.status === 'confirmed' && 
            now - tx.timestamp <= 1000
        );
        
        simulationData.metrics.tps = recentTxs.length;
        
        // 平均確認時間の計算
        const confirmedTxs = simulationData.transactions.filter(tx => tx.status === 'confirmed');
        if (confirmedTxs.length > 0) {
            const avgConfirmationTime = confirmedTxs.reduce((sum, tx) => sum + tx.confirmationTime, 0) / confirmedTxs.length;
            simulationData.metrics.confirmationTime = avgConfirmationTime;
        }
        
        // ネットワーク負荷の計算（ペンディングトランザクション数に基づく）
        const pendingTxs = simulationData.transactions.filter(tx => tx.status === 'pending');
        simulationData.metrics.networkLoad = Math.min(100, Math.round(pendingTxs.length / 10));
        
        // エネルギー効率の計算
        switch (consensusType) {
            case 'pou':
                simulationData.metrics.energyEfficiency = 'very high';
                break;
            case 'pos':
                simulationData.metrics.energyEfficiency = 'high';
                break;
            case 'pow':
                simulationData.metrics.energyEfficiency = 'low';
                break;
            default:
                simulationData.metrics.energyEfficiency = 'medium';
        }
        
        // AI最適化による効率向上
        if (aiOptimization && consensusType !== 'pow') {
            if (simulationData.metrics.energyEfficiency === 'high') {
                simulationData.metrics.energyEfficiency = 'very high';
            }
        }
        
        // メトリクス表示の更新
        updateMetricsDisplay();
        
        // チャートの更新
        updateCharts();
    }

    // メトリクス表示の更新
    function updateMetricsDisplay() {
        tpsValue.textContent = simulationData.metrics.tps;
        confirmationTime.textContent = `${Math.round(simulationData.metrics.confirmationTime || 0)} ms`;
        networkLoad.textContent = `${simulationData.metrics.networkLoad}%`;
        energyEfficiency.textContent = simulationData.metrics.energyEfficiency;
    }

    // チャートの初期化
    function initializeCharts() {
        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false,
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: 0
                }
            },
            animation: {
                duration: 0
            }
        };
        
        // TPSチャート
        const tpsCtx = document.createElement('canvas');
        document.getElementById('tps-chart').appendChild(tpsCtx);
        tpsChart = new Chart(tpsCtx, {
            type: 'line',
            data: {
                labels: Array(20).fill(''),
                datasets: [{
                    data: Array(20).fill(0),
                    borderColor: '#6c5ce7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    fill: true
                }]
            },
            options: chartOptions
        });
        
        // 確認時間チャート
        const confirmationCtx = document.createElement('canvas');
        document.getElementById('confirmation-chart').appendChild(confirmationCtx);
        confirmationChart = new Chart(confirmationCtx, {
            type: 'line',
            data: {
                labels: Array(20).fill(''),
                datasets: [{
                    data: Array(20).fill(0),
                    borderColor: '#00cec9',
                    backgroundColor: 'rgba(0, 206, 201, 0.1)',
                    fill: true
                }]
            },
            options: chartOptions
        });
        
        // ネットワーク負荷チャート
        const networkCtx = document.createElement('canvas');
        document.getElementById('network-chart').appendChild(networkCtx);
        networkChart = new Chart(networkCtx, {
            type: 'line',
            data: {
                labels: Array(20).fill(''),
                datasets: [{
                    data: Array(20).fill(0),
                    borderColor: '#fd79a8',
                    backgroundColor: 'rgba(253, 121, 168, 0.1)',
                    fill: true
                }]
            },
            options: chartOptions
        });
        
        // エネルギー効率チャート
        const energyCtx = document.createElement('canvas');
        document.getElementById('energy-chart').appendChild(energyCtx);
        energyChart = new Chart(energyCtx, {
            type: 'doughnut',
            data: {
                labels: ['効率'],
                datasets: [{
                    data: [100],
                    backgroundColor: ['#00cec9'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                },
                animation: {
                    duration: 0
                }
            }
        });
    }

    // チャートの更新
    function updateCharts() {
        // TPSチャートの更新
        tpsChart.data.datasets[0].data.push(simulationData.metrics.tps);
        tpsChart.data.datasets[0].data.shift();
        tpsChart.update();
        
        // 確認時間チャートの更新
        confirmationChart.data.datasets[0].data.push(simulationData.metrics.confirmationTime || 0);
        confirmationChart.data.datasets[0].data.shift();
        confirmationChart.update();
        
        // ネットワーク負荷チャートの更新
        networkChart.data.datasets[0].data.push(simulationData.metrics.networkLoad);
        networkChart.data.datasets[0].data.shift();
        networkChart.update();
        
        // エネルギー効率チャートの更新
        let energyValue;
        switch (simulationData.metrics.energyEfficiency) {
            case 'very high':
                energyValue = 90;
                energyChart.data.datasets[0].backgroundColor = ['#00cec9'];
                break;
            case 'high':
                energyValue = 75;
                energyChart.data.datasets[0].backgroundColor = ['#55efc4'];
                break;
            case 'medium':
                energyValue = 50;
                energyChart.data.datasets[0].backgroundColor = ['#fdcb6e'];
                break;
            case 'low':
                energyValue = 25;
                energyChart.data.datasets[0].backgroundColor = ['#ff7675'];
                break;
            default:
                energyValue = 50;
                energyChart.data.datasets[0].backgroundColor = ['#fdcb6e'];
        }
        energyChart.data.datasets[0].data = [energyValue];
        energyChart.update();
    }

    // チャートのリセット
    function resetCharts() {
        tpsChart.data.datasets[0].data = Array(20).fill(0);
        confirmationChart.data.datasets[0].data = Array(20).fill(0);
        networkChart.data.datasets[0].data = Array(20).fill(0);
        energyChart.data.datasets[0].data = [100];
        energyChart.data.datasets[0].backgroundColor = ['#00cec9'];
        
        tpsChart.update();
        confirmationChart.update();
        networkChart.update();
        energyChart.update();
    }

    // D3.jsビジュアライゼーションの初期化
    function initializeVisualization() {
        // SVG要素の作成
        svg = d3.select('#dag-canvas')
            .append('svg')
            .attr('width', '100%')
            .attr('height', '100%');
        
        // ズーム機能の追加
        zoom = d3.zoom()
            .scaleExtent([0.1, 4])
            .on('zoom', (event) => {
                g.attr('transform', event.transform);
            });
        
        svg.call(zoom);
        
        // グループ要素の作成
        g = svg.append('g');
        
        // シミュレーションの初期化
        simulation = d3.forceSimulation()
            .force('link', d3.forceLink().id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-300))
            .force('center', d3.forceCenter(dagCanvas.clientWidth / 2, dagCanvas.clientHeight / 2))
            .force('collision', d3.forceCollide().radius(30));
    }

    // ビジュアライゼーションの更新
    function updateVisualization() {
        if (!simulationRunning) return;
        
        // リンクの更新
        let link = g.selectAll('.link')
            .data(simulationData.links, d => `${d.source}-${d.target}`);
        
        link.exit().remove();
        
        const linkEnter = link.enter().append('line')
            .attr('class', 'link')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.6)
            .attr('stroke-width', d => Math.sqrt(d.value));
        
        link = linkEnter.merge(link);
        
        // ノードの更新
        let node = g.selectAll('.node')
            .data(simulationData.nodes, d => d.id);
        
        node.exit().remove();
        
        const nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));
        
        nodeEnter.append('circle')
            .attr('r', 10)
            .attr('fill', d => getNodeColor(d))
            .attr('stroke', '#fff')
            .attr('stroke-width', 1.5);
        
        nodeEnter.append('text')
            .attr('dy', 4)
            .attr('text-anchor', 'middle')
            .text(d => d.id.substring(5, 7))
            .attr('fill', '#fff')
            .attr('font-size', '8px');
        
        node = nodeEnter.merge(node);
        
        // シミュレーションの更新
        simulation
            .nodes(simulationData.nodes)
            .on('tick', ticked);
        
        simulation.force('link')
            .links(simulationData.links);
        
        // 位置の更新関数
        function ticked() {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
            
            node
                .attr('transform', d => `translate(${d.x},${d.y})`);
        }
        
        // ドラッグ関数
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }
        
        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        
        // 100msごとに再実行
        setTimeout(updateVisualization, 100);
    }

    // ビジュアライゼーションのリセット
    function resetVisualization() {
        g.selectAll('*').remove();
        simulation.nodes([]);
        simulation.force('link').links([]);
        simulation.alpha(1).restart();
    }

    // ノードの色を取得
    function getNodeColor(node) {
        const colors = ['#6c5ce7', '#00cec9', '#fd79a8'];
        return colors[node.group % colors.length];
    }

    // ズーム機能
    function zoomIn() {
        svg.transition().duration(300).call(zoom.scaleBy, 1.5);
    }
    
    function zoomOut() {
        svg.transition().duration(300).call(zoom.scaleBy, 0.75);
    }
    
    function resetView() {
        svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
    }

    // ログエントリの追加
    function addLogEntry(type, message) {
        const now = new Date();
        const timeString = now.toTimeString().substring(0, 8);
        
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        
        const timeSpan = document.createElement('span');
        timeSpan.className = 'log-time';
        timeSpan.textContent = timeString;
        
        const typeSpan = document.createElement('span');
        typeSpan.className = `log-type ${type.toLowerCase()}`;
        typeSpan.textContent = type;
        
        const messageSpan = document.createElement('span');
        messageSpan.className = 'log-message';
        messageSpan.textContent = message;
        
        logEntry.appendChild(timeSpan);
        logEntry.appendChild(typeSpan);
        logEntry.appendChild(messageSpan);
        
        txLog.appendChild(logEntry);
        txLog.scrollTop = txLog.scrollHeight;
        
        // 最大100エントリまで保持
        while (txLog.children.length > 100) {
            txLog.removeChild(txLog.firstChild);
        }
    }

    // ログのクリア
    function clearLog() {
        txLog.innerHTML = '';
    }

    // コンセンサスタイプの名前を取得
    function getConsensusName(type) {
        switch (type) {
            case 'pou':
                return 'Proof of Ultima (PoU)';
            case 'pos':
                return 'Proof of Stake (PoS)';
            case 'pow':
                return 'Proof of Work (PoW)';
            default:
                return type;
        }
    }
});