import type { Meta, StoryObj } from '@storybook/react';

import ContactPageOutlined from '../../lib/action/ContactPageOutlined';

const meta: Meta<typeof ContactPageOutlined> = {
  component: ContactPageOutlined,
  tags: ['autodocs'],
  title: 'action/ContactPageOutlined',
};

export default meta;
type Story = StoryObj<typeof ContactPageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
