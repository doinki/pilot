import type { Meta, StoryObj } from '@storybook/react';

import TimesOneMobiledataOutlined from '../../lib/device/TimesOneMobiledataOutlined';

const meta: Meta<typeof TimesOneMobiledataOutlined> = {
  component: TimesOneMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/TimesOneMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof TimesOneMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
