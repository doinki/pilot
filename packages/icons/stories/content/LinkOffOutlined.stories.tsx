import type { Meta, StoryObj } from '@storybook/react';

import LinkOffOutlined from '../../lib/content/LinkOffOutlined';

const meta: Meta<typeof LinkOffOutlined> = {
  component: LinkOffOutlined,
  tags: ['autodocs'],
  title: 'content/LinkOffOutlined',
};

export default meta;
type Story = StoryObj<typeof LinkOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
