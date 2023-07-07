import type { Meta, StoryObj } from '@storybook/react';

import CurrencyRubleOutlined from '../../lib/image/CurrencyRubleOutlined';

const meta: Meta<typeof CurrencyRubleOutlined> = {
  component: CurrencyRubleOutlined,
  tags: ['autodocs'],
  title: 'image/CurrencyRubleOutlined',
};

export default meta;
type Story = StoryObj<typeof CurrencyRubleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
