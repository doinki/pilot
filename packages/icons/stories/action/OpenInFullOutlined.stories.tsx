import type { Meta, StoryObj } from '@storybook/react';

import OpenInFullOutlined from '../../lib/action/OpenInFullOutlined';

const meta: Meta<typeof OpenInFullOutlined> = {
  component: OpenInFullOutlined,
  tags: ['autodocs'],
  title: 'action/OpenInFullOutlined',
};

export default meta;
type Story = StoryObj<typeof OpenInFullOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
