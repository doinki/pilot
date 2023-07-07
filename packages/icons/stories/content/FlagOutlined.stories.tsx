import type { Meta, StoryObj } from '@storybook/react';

import FlagOutlined from '../../lib/content/FlagOutlined';

const meta: Meta<typeof FlagOutlined> = {
  component: FlagOutlined,
  tags: ['autodocs'],
  title: 'content/FlagOutlined',
};

export default meta;
type Story = StoryObj<typeof FlagOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
