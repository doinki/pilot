import type { Meta, StoryObj } from '@storybook/react';

import DisabledVisibleOutlined from '../../lib/action/DisabledVisibleOutlined';

const meta: Meta<typeof DisabledVisibleOutlined> = {
  component: DisabledVisibleOutlined,
  tags: ['autodocs'],
  title: 'action/DisabledVisibleOutlined',
};

export default meta;
type Story = StoryObj<typeof DisabledVisibleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
