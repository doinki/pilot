import type { Meta, StoryObj } from '@storybook/react';

import CancelOutlined from '../../lib/navigation/CancelOutlined';

const meta: Meta<typeof CancelOutlined> = {
  component: CancelOutlined,
  tags: ['autodocs'],
  title: 'navigation/CancelOutlined',
};

export default meta;
type Story = StoryObj<typeof CancelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
