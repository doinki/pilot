import type { Meta, StoryObj } from '@storybook/react';

import UpdateDisabledOutlined from '../../lib/action/UpdateDisabledOutlined';

const meta: Meta<typeof UpdateDisabledOutlined> = {
  component: UpdateDisabledOutlined,
  tags: ['autodocs'],
  title: 'action/UpdateDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof UpdateDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
