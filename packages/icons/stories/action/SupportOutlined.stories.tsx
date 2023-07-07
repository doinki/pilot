import type { Meta, StoryObj } from '@storybook/react';

import SupportOutlined from '../../lib/action/SupportOutlined';

const meta: Meta<typeof SupportOutlined> = {
  component: SupportOutlined,
  tags: ['autodocs'],
  title: 'action/SupportOutlined',
};

export default meta;
type Story = StoryObj<typeof SupportOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
