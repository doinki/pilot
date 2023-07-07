import type { Meta, StoryObj } from '@storybook/react';

import AllInboxOutlined from '../../lib/action/AllInboxOutlined';

const meta: Meta<typeof AllInboxOutlined> = {
  component: AllInboxOutlined,
  tags: ['autodocs'],
  title: 'action/AllInboxOutlined',
};

export default meta;
type Story = StoryObj<typeof AllInboxOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
