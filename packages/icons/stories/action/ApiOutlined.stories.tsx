import type { Meta, StoryObj } from '@storybook/react';

import ApiOutlined from '../../lib/action/ApiOutlined';

const meta: Meta<typeof ApiOutlined> = {
  component: ApiOutlined,
  tags: ['autodocs'],
  title: 'action/ApiOutlined',
};

export default meta;
type Story = StoryObj<typeof ApiOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
