import type { Meta, StoryObj } from '@storybook/react';

import CreditCardOutlined from '../../lib/action/CreditCardOutlined';

const meta: Meta<typeof CreditCardOutlined> = {
  component: CreditCardOutlined,
  tags: ['autodocs'],
  title: 'action/CreditCardOutlined',
};

export default meta;
type Story = StoryObj<typeof CreditCardOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
