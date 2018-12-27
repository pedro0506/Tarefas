<?php

class Frete_Personalizado_Model_Carrier_Flatrate2
    extends Mage_Shipping_Model_Carrier_Flatrate
    implements Mage_Shipping_Model_Carrier_Interface
{

    protected $_code = 'flatrate2';

    public function getAllowedMethods()
    {
        return array('flatrate2'=>$this->getConfigData('name'));
    }

}