import type { Meta, StoryObj } from '@storybook/react';

import CommentsDisabledOutlined from '../../lib/communication/CommentsDisabledOutlined';

const meta: Meta<typeof CommentsDisabledOutlined> = {
  component: CommentsDisabledOutlined,
  tags: ['autodocs'],
  title: 'communication/CommentsDisabledOutlined',
};

export default meta;
type Story = StoryObj<typeof CommentsDisabledOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
