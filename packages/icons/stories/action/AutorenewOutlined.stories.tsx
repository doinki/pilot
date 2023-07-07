import type { Meta, StoryObj } from '@storybook/react';

import AutorenewOutlined from '../../lib/action/AutorenewOutlined';

const meta: Meta<typeof AutorenewOutlined> = {
  component: AutorenewOutlined,
  tags: ['autodocs'],
  title: 'action/AutorenewOutlined',
};

export default meta;
type Story = StoryObj<typeof AutorenewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
