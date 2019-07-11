/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Write your transction processor functions here
 */

/**
 * Trade transaction
 * @param {sample1.Trade} ti
 * @transaction
 */
async function trade(ti) {

    // Get the asset registry for the asset.
    const brokerRegistry = await getParticipantRegistry('sample1.Broker');

    const tradeDataRegistry = await getAssetRegistry('sample1.TradeData');
    broker = await brokerRegistry.get(ti.brokerId);

    var factory = getFactory();

    var  NS =  'sample1';
    var  trade = factory.newResource(NS,'TradeData',ti.tradeId);
    trade.tradeId = ti.tradeId;
    trade.tickerId = ti.tickerId;
    trade.amount= ti.amount;
    trade.broker = broker;


    // Emit an event for the modified asset.
    let event = factory.newEvent(NS, 'TradeEvent');
    event.tickerId = ti.tickerId;
    event.amount = ti.amount;
    event.organization = broker.organization;
    emit(event);

    tradeDataRegistry.add(trade);

}
