import type { Meta, StoryObj } from '@storybook/react';

import CellTowerOutlined from '../../lib/communication/CellTowerOutlined';

const meta: Meta<typeof CellTowerOutlined> = {
  component: CellTowerOutlined,
  tags: ['autodocs'],
  title: 'communication/CellTowerOutlined',
};

export default meta;
type Story = StoryObj<typeof CellTowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
