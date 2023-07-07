import type { Meta, StoryObj } from '@storybook/react';

import EjectOutlined from '../../lib/action/EjectOutlined';

const meta: Meta<typeof EjectOutlined> = {
  component: EjectOutlined,
  tags: ['autodocs'],
  title: 'action/EjectOutlined',
};

export default meta;
type Story = StoryObj<typeof EjectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
