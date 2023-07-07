import type { Meta, StoryObj } from '@storybook/react';

import RepartitionOutlined from '../../lib/action/RepartitionOutlined';

const meta: Meta<typeof RepartitionOutlined> = {
  component: RepartitionOutlined,
  tags: ['autodocs'],
  title: 'action/RepartitionOutlined',
};

export default meta;
type Story = StoryObj<typeof RepartitionOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
