import type { Meta, StoryObj } from '@storybook/react';

import PermPhoneMsgOutlined from '../../lib/action/PermPhoneMsgOutlined';

const meta: Meta<typeof PermPhoneMsgOutlined> = {
  component: PermPhoneMsgOutlined,
  tags: ['autodocs'],
  title: 'action/PermPhoneMsgOutlined',
};

export default meta;
type Story = StoryObj<typeof PermPhoneMsgOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
