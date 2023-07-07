import type { Meta, StoryObj } from '@storybook/react';

import OndemandVideoOutlined from '../../lib/notification/OndemandVideoOutlined';

const meta: Meta<typeof OndemandVideoOutlined> = {
  component: OndemandVideoOutlined,
  tags: ['autodocs'],
  title: 'notification/OndemandVideoOutlined',
};

export default meta;
type Story = StoryObj<typeof OndemandVideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
