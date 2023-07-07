import type { Meta, StoryObj } from '@storybook/react';

import BackHandOutlined from '../../lib/social/BackHandOutlined';

const meta: Meta<typeof BackHandOutlined> = {
  component: BackHandOutlined,
  tags: ['autodocs'],
  title: 'social/BackHandOutlined',
};

export default meta;
type Story = StoryObj<typeof BackHandOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
