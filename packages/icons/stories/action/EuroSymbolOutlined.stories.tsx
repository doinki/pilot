import type { Meta, StoryObj } from '@storybook/react';

import EuroSymbolOutlined from '../../lib/action/EuroSymbolOutlined';

const meta: Meta<typeof EuroSymbolOutlined> = {
  component: EuroSymbolOutlined,
  tags: ['autodocs'],
  title: 'action/EuroSymbolOutlined',
};

export default meta;
type Story = StoryObj<typeof EuroSymbolOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
