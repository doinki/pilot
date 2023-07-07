import type { Meta, StoryObj } from '@storybook/react';

import PaymentsOutlined from '../../lib/navigation/PaymentsOutlined';

const meta: Meta<typeof PaymentsOutlined> = {
  component: PaymentsOutlined,
  tags: ['autodocs'],
  title: 'navigation/PaymentsOutlined',
};

export default meta;
type Story = StoryObj<typeof PaymentsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
